const computeEndMode = (data: any, rruleObj: any) => {
  if (rruleObj.count || rruleObj.count === 0) {
    return "After";
  }

  if (rruleObj.until) {
    return "On date";
  }

  return "Never";
};

export default computeEndMode;
