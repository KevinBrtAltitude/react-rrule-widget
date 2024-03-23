import { Options } from "rrule";
import { Model } from "../Model";

const computeDailyInterval = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 3) {
    return data.repeat.daily.interval;
  }

  return rruleObj.interval;
};

export default computeDailyInterval;
