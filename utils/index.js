export const getOccurrence = (array, value) => {
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
