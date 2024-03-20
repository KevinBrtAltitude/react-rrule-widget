import { RRule } from "rrule";
import { Model } from "../Model";

const computeOptions = ({ hideStart, weekStartsOnSunday }: Model['options']) => {
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
