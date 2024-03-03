const computeEndOnDate = (data: any, rruleObj: any) => {
  if (!rruleObj.until) {
    return data.end.onDate.date;
  }

  return rruleObj.until;
};

export default computeEndOnDate;
