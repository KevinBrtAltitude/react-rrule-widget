const computeHourlyInterval = (data: any, rruleObj: any) => {
  if (rruleObj.freq !== 4) {
    return data.repeat.daily.interval;
  }

  return rruleObj.interval;
};

export default computeHourlyInterval;
