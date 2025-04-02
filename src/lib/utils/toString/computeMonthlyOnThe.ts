import { RRule } from "rrule";

const computeMonthlyOnThe = (onThe: any) => {
  const repeat: any = {};
  
  // Get all "which" values (positions)
  const whichValues = Array.isArray(onThe.which) ? [...new Set(onThe.which)] : [onThe.which];
  
  // Get all "day" values
  const dayValues = Array.isArray(onThe.day) ? [...new Set(onThe.day)] : [onThe.day];
  
  // Convert positions to numbers
  const getPositionValue = (which: string): number => {
    switch (which) {
      case "First": return 1;
      case "Second": return 2;
      case "Third": return 3;
      case "Fourth": return 4;
      case "Last": return -1;
      default: return 1;
    }
  };
  
  // Convert days to RRule constants
  const getDayConstant = (day: string): any => {
    switch (day) {
      case "Monday": return RRule.MO;
      case "Tuesday": return RRule.TU;
      case "Wednesday": return RRule.WE;
      case "Thursday": return RRule.TH;
      case "Friday": return RRule.FR;
      case "Saturday": return RRule.SA;
      case "Sunday": return RRule.SU;
      case "Day": return null; // special case handled later
      case "Weekday": return null; // special case handled later
      case "Weekend day": return null; // special case handled later
      default: return null;
    }
  };
  
  // Special cases for day sets
  const handleSpecialDays = (day: string): any[] => {
    switch (day) {
      case "Day": 
        return [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR, RRule.SA, RRule.SU];
      case "Weekday": 
        return [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR];
      case "Weekend day": 
        return [RRule.SA, RRule.SU];
      default: 
        return [];
    }
  };
  
  // If we have a special case (Day, Weekday or Weekend day), handle differently
  if (dayValues.some((day: string) => ["Day", "Weekday", "Weekend day"].includes(day))) {
    // In this case, use the old method with separate bysetpos and byweekday
    repeat.bysetpos = whichValues.map(getPositionValue);
    
    // Merge all special days
    const allDays: number[] = [];
    
    dayValues.forEach((day: string) => {
      if (["Day", "Weekday", "Weekend day"].includes(day)) {
        switch (day) {
          case "Day":
            [0, 1, 2, 3, 4, 5, 6].forEach(d => allDays.push(d));
            break;
          case "Weekday":
            [0, 1, 2, 3, 4].forEach(d => allDays.push(d));
            break;
          case "Weekend day":
            [5, 6].forEach(d => allDays.push(d));
            break;
        }
      } else {
        const dayValue = getDayConstant(day);
        if (dayValue) allDays.push(dayValue.weekday);
      }
    });
    
    // Remove duplicates
    repeat.byweekday = [...new Set(allDays)];
  } else {
    // Create byweekday with RRule.weekday instances with position
    const byweekdays = [];
    
    // Create a set to avoid duplicates
    const uniqueWeekdays = new Set();
    
    for (const which of whichValues) {
      const position = getPositionValue(which);
      
      for (const day of dayValues) {
        const dayConstant = getDayConstant(day);
        if (dayConstant) {
          // Create a unique key for this day with this position
          const key = `${position}_${dayConstant.weekday}`;
          
          // Check if this combination already exists
          if (!uniqueWeekdays.has(key)) {
            // Create the weekday instance with the position
            byweekdays.push(dayConstant.nth(position));
            uniqueWeekdays.add(key);
          }
        }
      }
    }
    
    repeat.byweekday = byweekdays;
  }
  
  return repeat;
};

export default computeMonthlyOnThe;
