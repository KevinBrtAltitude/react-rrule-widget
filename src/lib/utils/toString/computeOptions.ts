import { RRule } from "rrule";

const computeOptions = ({ hideStart, weekStartsOnSunday }: any) => {
  const options: any = {};

  if (hideStart) {
    options.dtstart = null;
  }

  if (weekStartsOnSunday) {
    options.wkst = RRule.SU;
  }

  return options;
};

export default computeOptions;
