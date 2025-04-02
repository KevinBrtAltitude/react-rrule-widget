import { Options } from "rrule";
import { Model } from "../Model";
import { asArray } from "../asArray";

const computeYearlyOnMonthday = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 0 || !rruleObj.bymonthday) {
    // Ensure the default value is always an array
    return Array.isArray(data.repeat.yearly.on.day) 
      ? data.repeat.yearly.on.day 
      : [data.repeat.yearly.on.day];
  }

  // Convert bymonthday to array for uniform processing
  const bymonthdayArray = asArray(rruleObj.bymonthday);
  
  // Convert all values to strings to ensure type compatibility with Model
  return bymonthdayArray.map(day => day.toString());
};

export default computeYearlyOnMonthday;
