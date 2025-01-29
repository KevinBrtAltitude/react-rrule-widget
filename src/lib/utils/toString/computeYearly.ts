import { RRule } from "rrule";

import computeYearlyOn from "./computeYearlyOn";
import computeYearlyOnThe from "./computeYearlyOnThe";

const computeYearly = ({ mode, interval, on, onThe }: any) => ({
  freq: RRule.YEARLY,
  interval: interval || 1,
  wkst: RRule.MO,
  ...(mode === "on" ? computeYearlyOn(on) : computeYearlyOnThe(onThe)),
});

export default computeYearly;
