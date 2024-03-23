import { Options } from "rrule";
import { MONTHS } from "../../constants/index";
import { Model } from "../Model";

const computeYearlyOnTheMonth = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
    return data.repeat.yearly.onThe.month;
  }
  //early exit.
  if (!rruleObj.bymonth) {
    return data.repeat.yearly.onThe.month;
  }
  if (typeof rruleObj.bymonth === "number") {
    return MONTHS[rruleObj.bymonth - 1];
  }
  // TODO: Is this safe to assume ?
  return MONTHS[rruleObj.bymonth[0] - 1];
};

export default computeYearlyOnTheMonth;
