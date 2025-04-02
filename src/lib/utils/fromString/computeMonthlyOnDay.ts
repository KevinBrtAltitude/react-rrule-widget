import { Options } from "rrule";
import { Model } from "../Model";
import { asArray } from "../asArray";

const computeMonthlyOnDay = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 1 || !rruleObj.bymonthday) {
    // Ensure the default value is always an array
    return Array.isArray(data.repeat.monthly.on.day) 
      ? data.repeat.monthly.on.day 
      : [data.repeat.monthly.on.day];
  }

  // Convert bymonthday to array for uniform processing
  const bymonthdayArray = asArray(rruleObj.bymonthday);
  
  // Convert all values to strings to ensure type compatibility with Model
  return bymonthdayArray.map(day => day.toString());
};

export default computeMonthlyOnDay;
