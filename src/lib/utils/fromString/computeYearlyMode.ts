import { Options } from "rrule";
import { Model } from "../Model";

const computeYearlyMode = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 0 || !rruleObj.bymonth) {
    return data.repeat.yearly.mode;
  }

  if (rruleObj.bymonthday) {
    return "on";
  }

  return "on the";
};

export default computeYearlyMode;
