import { Options } from "rrule";
import { Model } from "../Model";

const computeMonthlyMode = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 1) {
    return data.repeat.monthly.mode;
  }

  if (rruleObj.bymonthday) {
    return "on";
  }

  return "on the";
};

export default computeMonthlyMode;
