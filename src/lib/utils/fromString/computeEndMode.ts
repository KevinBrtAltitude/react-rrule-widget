import { Options } from "rrule";
import { Model } from "../Model";

const computeEndMode = (rruleObj: Partial<Options>): Model["end"]["mode"] => {
  if (rruleObj.count || rruleObj.count === 0) {
    return "After";
  }

  if (rruleObj.until) {
    return "On date";
  }

  return "Never";
};

export default computeEndMode;
