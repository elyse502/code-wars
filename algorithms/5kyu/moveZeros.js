exports.moveZeros = (arr) => {
  const nonZeros = arr.filter((x) => x !== 0);
  const zeros = arr.filter((x) => x === 0);
  return [...nonZeros, ...zeros];
};
