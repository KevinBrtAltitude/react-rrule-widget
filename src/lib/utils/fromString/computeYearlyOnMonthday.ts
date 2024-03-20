import { Options } from "rrule";
import { Model } from "../Model";

const computeYearlyOnMonthday = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 0 || !rruleObj.bymonthday) {
    return data.repeat.yearly.on.day;
  }

  if (typeof rruleObj.bymonthday === "number") {
    return rruleObj.bymonthday;
  }

  return rruleObj.bymonthday[0];
};

export default computeYearlyOnMonthday;
