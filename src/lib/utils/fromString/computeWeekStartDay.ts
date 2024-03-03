const computeWeekStartDay = (data: any, rruleObj: any) => {
  if (!rruleObj.wkst) {
    return data.options.weekStartsOnSunday;
  }
  return rruleObj.wkst === 6;
};

export default computeWeekStartDay;
