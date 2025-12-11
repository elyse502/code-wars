/**
 * Count characters in your string
 * 
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

 * What if the string is empty? Then the result should be empty object literal, {}.
 * 
 * @param {*} string 
 * @returns {Object} An object with the count of each character in the string
 */

exports.count = (string) => {
  const result = {};

  for (let char of string) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;

  // Alternative concise solution
  /* const result = {};
  string.split('').forEach(char => result[char] ? result[char]++ : result[char] = 1);
  return result; */
};
