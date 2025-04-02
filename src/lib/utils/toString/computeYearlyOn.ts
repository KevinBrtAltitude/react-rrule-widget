import { MONTHS } from "../../constants/index";

const computeYearlyOn = (on: any) => {
  // Get all months (as array)
  const monthValues = Array.isArray(on.month) ? on.month : [on.month];
  
  // Get all days (as array)
  const dayValues = Array.isArray(on.day) ? on.day : [on.day];
  
  const repeat: any = {};
  
  // Prepare bymonthday - convert strings to numbers if needed
  repeat.bymonthday = dayValues.map((day: any) => Number(day));
  
  // Convert month names to month numbers (1-12)
  repeat.bymonth = monthValues.map((month: string) => MONTHS.indexOf(month) + 1);
  
  return repeat;
};

export default computeYearlyOn;
