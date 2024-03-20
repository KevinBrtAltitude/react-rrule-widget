import { Options } from "rrule";
import { Model } from "../Model";

const computeEndAfter = (data: Model, rruleObj: Partial<Options>) => {
  if (!rruleObj.count && rruleObj.count !== 0) {
    return data.end.after;
  }

  return rruleObj.count;
};

export default computeEndAfter;
