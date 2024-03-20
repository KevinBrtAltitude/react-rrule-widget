import { RRule } from "rrule";

import computeStart from "./computeStart";
import computeRepeat from "./computeRepeat";
import computeEnd from "./computeEnd";
import computeOptions from "./computeOptions";
import { Model } from "../Model";

const computeRRule = ({ start, repeat, end, options }: Model) => {
  const rruleObject = {
    ...computeStart(start),
    ...computeRepeat(repeat),
    ...computeEnd(end),
    ...computeOptions(options),
  };
  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
