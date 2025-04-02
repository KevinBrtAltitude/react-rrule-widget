const computeMonthlyOn = (on: any) => {
  // Get all days (as array)
  const dayValues = Array.isArray(on.day) ? on.day : [on.day];
  
  // Prepare bymonthday - convert strings to numbers if needed
  const bymonthday = dayValues.map((day: any) => Number(day));
  
  return {
    bymonthday
  };
};

export default computeMonthlyOn;
