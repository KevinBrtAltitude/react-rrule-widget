import { Options } from "rrule";
import { Model } from "../Model";

const computeEndOnDate = (data: Model, rruleObj: Partial<Options>) => {
  if (!rruleObj.until) {
    return data.end.onDate.date;
  }

  return rruleObj.until;
};

export default computeEndOnDate;
