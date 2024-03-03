const computeStartOnDate = (data: any, rruleObj: any) => {
  if (!rruleObj.dtstart) {
    return data.start.onDate.date;
  }

  return rruleObj.dtstart;
};
export default computeStartOnDate;
