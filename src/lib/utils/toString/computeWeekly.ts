import { RRule } from "rrule";
import { values } from "lodash";

const computeWeekly = ({ interval, days }: any) => ({
  freq: RRule.WEEKLY,
  interval,
  wkst: RRule.MO,
  byweekday: values(days).reduce(
    (activeDays: any, isDayActive: any, dayIndex: any) =>
      isDayActive ? [...activeDays, dayIndex] : activeDays,
    []
  ),
});

export default computeWeekly;
