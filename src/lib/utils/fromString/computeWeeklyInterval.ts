const computeWeeklyInterval = (data: any, rruleObj: any) => {
  if (rruleObj.freq !== 2) {
    return data.repeat.weekly.interval;
  }

  return rruleObj.interval;
};

export default computeWeeklyInterval;
