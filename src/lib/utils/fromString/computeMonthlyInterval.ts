import { Options } from "rrule";
import { Model } from "../Model";

const computeMonthlyInterval = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 1) {
    return data.repeat.monthly.interval;
  }

  return rruleObj.interval;
};

export default computeMonthlyInterval;
