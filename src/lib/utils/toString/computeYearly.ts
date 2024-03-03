import { RRule } from "rrule";

import computeYearlyOn from "./computeYearlyOn";
import computeYearlyOnThe from "./computeYearlyOnThe";

const computeYearly = ({ mode, on, onThe }: any) => ({
  freq: RRule.YEARLY,
  wkst: RRule.MO,
  ...(mode === "on" ? computeYearlyOn(on) : computeYearlyOnThe(onThe)),
});

export default computeYearly;
