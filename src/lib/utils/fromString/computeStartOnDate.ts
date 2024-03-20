import { Options } from "rrule";
import { Model } from "../Model";

const computeStartOnDate = (data: Model, rruleObj: Partial<Options>) => {
  if (!rruleObj.dtstart) {
    return data.start.onDate.date;
  }

  return rruleObj.dtstart;
};
export default computeStartOnDate;
