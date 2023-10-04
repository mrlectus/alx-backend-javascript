const cleanSet = (inputSet, startString) => {
  const resultArray = [];

  inputSet.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const trimmedValue = value.substring(startString.length);
      resultArray.push(trimmedValue);
    }
  });

  return resultArray.join('-');
};
export default cleanSet;
