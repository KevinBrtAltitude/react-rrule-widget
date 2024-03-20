import { Options } from "rrule";
import { Model } from "../Model";

const computeHourlyInterval = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 4) {
    return data.repeat.daily.interval;
  }

  return rruleObj.interval;
};

export default computeHourlyInterval;
