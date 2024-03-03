import { RRule } from "rrule";

const computeDaily = ({ interval }: any) => ({
  freq: RRule.DAILY,
  interval,
  wkst: RRule.MO,
});

export default computeDaily;
