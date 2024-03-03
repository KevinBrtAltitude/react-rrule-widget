const computeEndAfter = (data: any, rruleObj: any) => {
  if (!rruleObj.count && rruleObj.count !== 0) {
    return data.end.after;
  }

  return rruleObj.count;
};

export default computeEndAfter;
