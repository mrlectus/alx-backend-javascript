const hasValuesFromArray = (obj, arr) => {
  const set = new Set(arr);
  return arr.every((value) => set.has(value));
};
export default hasValuesFromArray;
