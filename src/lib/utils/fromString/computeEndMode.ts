import { Options } from "rrule";

const computeEndMode = (rruleObj: Partial<Options>) => {
  if (rruleObj.count || rruleObj.count === 0) {
    return "After";
  }

  if (rruleObj.until) {
    return "On date";
  }

  return "Never";
};

export default computeEndMode;
