import { MONTHS } from "../../constants/index";

const computeYearlyOn = (on: any) => ({
  bymonth: MONTHS.indexOf(on.month) + 1,
  bymonthday: on.day,
});

export default computeYearlyOn;
