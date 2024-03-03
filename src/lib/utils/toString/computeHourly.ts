import { RRule } from "rrule";

const computeHourly = ({ interval }: any) => ({
  freq: RRule.HOURLY,
  interval,
});

export default computeHourly;
