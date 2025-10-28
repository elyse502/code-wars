/**
 * 
 * Find the stray number
 * 
 * You are given an odd-length array of integers, in which all of them are the same, except for one single number.

 * Complete the method which accepts such an array, and returns that single different number.

 * The input array will always be valid! (odd-length >= 3)

 * Examples
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3
 * 
 * @param {*} numbers 
 * @returns {number}
 */

exports.stray = (numbers) => {
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    return numbers[0];
  }

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[0]) {
      return numbers[i];
    }
  }

  // Or even better using XOR for optimal performance:
  // return numbers.reduce((a, b) => a ^ b);
};
