const computeMonthlyMode = (data: any, rruleObj: any) => {
  if (rruleObj.freq !== 1) {
    return data.repeat.monthly.mode;
  }

  if (rruleObj.bymonthday) {
    return "on";
  }

  return "on the";
};

export default computeMonthlyMode;
