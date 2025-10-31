/**
 * 
 * Unique In Order
 * 
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

 * For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 * 
 * @param {*} iterable 
 * @returns {Array}
 */

exports.uniqueInOrder = (iterable) => {
  if (typeof iterable === "string") {
    return iterable.split("").filter((char, idx, arr) => char !== arr[++idx]);
  }

  return iterable.filter((num, idx, arr) => num !== arr[++idx]);

  // Alternative with Better Type Handling
  /* const arr = Array.isArray(iterable) ? iterable : String(iterable).split("");
  return arr.filter((item, index) => item !== arr[index + 1]); */

  // OR simply
  //   return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
