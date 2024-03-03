const computeMonthlyInterval = (data: any, rruleObj: any) => {
  if (rruleObj.freq !== 1) {
    return data.repeat.monthly.interval;
  }

  return rruleObj.interval;
};

export default computeMonthlyInterval;
