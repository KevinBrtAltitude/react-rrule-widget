const computeDailyInterval = (data: any, rruleObj: any) => {
  if (rruleObj.freq !== 3) {
    return data.repeat.daily.interval;
  }

  return rruleObj.interval;
};

export default computeDailyInterval;
