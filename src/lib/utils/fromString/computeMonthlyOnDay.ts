import { Options } from "rrule";
import { Model } from "../Model";

const computeMonthlyOnDay = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 1 || !rruleObj.bymonthday) {
    return data.repeat.monthly.on.day;
  }

  if (typeof rruleObj.bymonthday === "number") {
    return rruleObj.bymonthday;
  }

  return rruleObj.bymonthday[0];
};

export default computeMonthlyOnDay;
