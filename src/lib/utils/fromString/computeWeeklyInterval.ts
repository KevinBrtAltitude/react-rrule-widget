import { Options } from "rrule";
import { Model } from "../Model";

const computeWeeklyInterval = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 2) {
    return data.repeat.weekly.interval;
  }

  return rruleObj.interval;
};

export default computeWeeklyInterval;
