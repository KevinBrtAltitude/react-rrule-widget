import { Options } from "rrule";
import { Model } from "../Model";

const computeYearlyOnTheWhich = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
    return data.repeat.yearly.onThe.which;
  }
  // early exit if bysetpos is not set
  if( !rruleObj.bysetpos ) {
    return data.repeat.yearly.onThe.which;
  }
  const bysetpos =
    typeof rruleObj.bysetpos === "number"
      ? rruleObj.bysetpos
      : rruleObj.bysetpos[0];

  switch (bysetpos) {
    case 1: {
      return "First";
    }
    case 2: {
      return "Second";
    }
    case 3: {
      return "Third";
    }
    case 4: {
      return "Fourth";
    }
    case -1: {
      return "Last";
    }
    default: {
      return data.repeat.yearly.onThe.which;
    }
  }
};

export default computeYearlyOnTheWhich;
