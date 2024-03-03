import { RRule } from "rrule";

import computeMonthlyOn from "./computeMonthlyOn";
import computeMonthlyOnThe from "./computeMonthlyOnThe";

const computeMonthly = ({ mode, interval, on, onThe }: any) => ({
  freq: RRule.MONTHLY,
  interval,
  wkst: RRule.MO,
  ...(mode === "on" ? computeMonthlyOn(on) : computeMonthlyOnThe(onThe)),
});

export default computeMonthly;
