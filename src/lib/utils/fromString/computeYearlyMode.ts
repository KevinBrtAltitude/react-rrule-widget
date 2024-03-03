const computeYearlyMode = (data: any, rruleObj: any) => {
  if (rruleObj.freq !== 0 || !rruleObj.bymonth) {
    return data.repeat.yearly.mode;
  }

  if (rruleObj.bymonthday) {
    return "on";
  }

  return "on the";
};

export default computeYearlyMode;
