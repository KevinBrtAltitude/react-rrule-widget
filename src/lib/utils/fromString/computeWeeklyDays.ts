import { Options } from "rrule";
import { Model } from "../Model";
import { asArray } from "../asArray";

const computeWeeklyDays = (data: Model, rruleObj: Partial<Options>) => {
  let weekdays = [];

  if (rruleObj.freq !== 2) {
    return data.repeat.weekly.days;
  }

  if (rruleObj.byweekday) {
    weekdays = asArray(rruleObj.byweekday).map(
      (weekday: any) => weekday.weekday
    );
  }

  return {
    mon: weekdays.includes(0),
    tue: weekdays.includes(1),
    wed: weekdays.includes(2),
    thu: weekdays.includes(3),
    fri: weekdays.includes(4),
    sat: weekdays.includes(5),
    sun: weekdays.includes(6),
  };
};

export default computeWeeklyDays;
