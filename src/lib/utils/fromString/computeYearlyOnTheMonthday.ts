import { Options } from "rrule";
import { Model } from "../Model";
import { asArray } from '../asArray';

// Map of numeric weekday values to text values
const weekdayMap: Record<number, string> = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday"
};

// Predefined sets of days
const predefinedSets: Record<string, string> = {
  "0,1,2,3,4,5,6": "Day",
  "0,1,2,3,4": "Weekday",
  "5,6": "Weekend day"
};

const computeYearlyOnTheMonthday = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
    // Ensure the default value is always an array
    return Array.isArray(data.repeat.yearly.onThe.day) 
      ? data.repeat.yearly.onThe.day 
      : [data.repeat.yearly.onThe.day];
  }

  // Convert byweekday to an array of numeric values
  const weekdayValues = asArray(rruleObj.byweekday).map((weekday: any) => weekday.weekday);
  
  // Sort the days to facilitate comparison with predefined sets
  const weekdaysStr = [...weekdayValues].sort().join(",");

  // Check if the combination matches a predefined set
  if (Object.prototype.hasOwnProperty.call(predefinedSets, weekdaysStr)) {
    return [predefinedSets[weekdaysStr]];
  }
  
  // Always return an array of days
  return weekdayValues.map(day => weekdayMap[day]);
};

export default computeYearlyOnTheMonthday;
