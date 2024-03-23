import { Options } from "rrule";
import { Model } from "../Model";

const computeWeekStartDay = (data: Model, rruleObj: Partial<Options>) => {
  if (!rruleObj.wkst) {
    return data.options.weekStartsOnSunday;
  }
  return rruleObj.wkst === 6;
};

export default computeWeekStartDay;
