export const asArray = <T>(value: T | T[] | null): T[] => {
  if (Array.isArray(value)) {
    return value;
  }

  return value === null ? [] : [value];
};
