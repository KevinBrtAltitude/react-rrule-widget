import moment from "moment";

import computeRRuleToString from "./toString/computeRRule";
import { DATE_TIME_FORMAT } from "../constants/index";
import { ReactRRuleWidgetPropConfig } from "../components/ReactRRuleWidget";
import { RRule, rrulestr } from "rrule";
import { Model } from "./Model";
import computeRRule from "./fromString/computeRRule";

const configureState = (
  rule: string,
  config: ReactRRuleWidgetPropConfig = {},
  calendarComponent?: React.ReactElement
) => {
  const configureFrequency = () =>
    config.frequency ? config.frequency[0] : "Daily";
  const configureYearly = () => config.yearly || "on";
  const configureMonthly = () => config.monthly || "on";
  const configureEnd = (): Model["end"]["mode"] =>
    config.end ? config.end : "After";
  const configureHideStart = () =>
    typeof config.hideStart === "undefined" ? true : config.hideStart;
  let data: Model = {
    start: {
      onDate: {
        date: moment().format(DATE_TIME_FORMAT),
        options: {
          weekStartsOnSunday: config.weekStartsOnSunday,
          calendarComponent,
        },
      },
    },
    repeat: {
      frequency: configureFrequency(),
      yearly: {
        mode: configureYearly(),
        on: {
          month: "Jan",
          day: 1,
        },
        onThe: {
          month: "Jan",
          day: "Monday",
          which: "First",
        },
        options: {
          modes: config.yearly,
        },
      },
      monthly: {
        mode: configureMonthly(),
        interval: 1,
        on: {
          day: 1,
        },
        onThe: {
          day: "Monday",
          which: "First",
        },
        options: {
          modes: config.monthly,
        },
      },
      weekly: {
        interval: 1,
        days: {
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false,
        },
        options: {
          weekStartsOnSunday: config.weekStartsOnSunday,
        },
      },
      daily: {
        interval: 1,
        wkst: RRule.MO.weekday,
      },
      hourly: {
        interval: 1,
      },
      options: {
        frequency: config.frequency,
      },
    },
    end: {
      mode: configureEnd(),
      after: config.count ?? 1,
      onDate: {
        date: moment().format(DATE_TIME_FORMAT),
        options: {
          weekStartsOnSunday: config.weekStartsOnSunday,
          calendarComponent,
        },
      },
      options: {
        modes: config.end,
      },
    },
    options: {
      hideStart: configureHideStart(),
      hideEnd: config.hideEnd,
      weekStartsOnSunday: config.weekStartsOnSunday,
      endOptions: config.endOptions ?? ["never", "on-date", "after-executions"],
      //count: config.count,
    },
    error: null,
  };

  if (rule.trim().length > 0) {
    // load the rule
    data = computeRRule(data, rule);
  }

  return {
    data,
    rrule: computeRRuleToString(data),
  };
};

export default configureState;
