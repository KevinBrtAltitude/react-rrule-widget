import computeYearly from "./computeYearly";
import computeMonthly from "./computeMonthly";
import computeWeekly from "./computeWeekly";
import computeDaily from "./computeDaily";
import computeHourly from "./computeHourly";
import { Model } from "../Model";

const computeRepeat = ({
  frequency,
  yearly,
  monthly,
  weekly,
  daily,
  hourly,
}: Model["repeat"]) => {
  switch (frequency) {
    case "Yearly": {
      return computeYearly(yearly);
    }
    case "Monthly": {
      return computeMonthly(monthly);
    }
    case "Weekly": {
      return computeWeekly(weekly);
    }
    case "Daily": {
      return computeDaily(daily);
    }
    case "Hourly": {
      return computeHourly(hourly);
    }
    default:
      return {};
  }
};

export default computeRepeat;
