/**
 * 
 * Split Strings
 * 
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

 * Examples:

    - 'abc' =>  ['ab', 'c_']
    - 'abcdef' => ['ab', 'cd', 'ef']
 * 
 * @param {*} str 
 * @returns {Array<string>}
 */

exports.solution = (str) => {
  if (str.length % 2 !== 0) str += "_";

  return str
    .split("")
    .map((_, i, arr) => (i % 2 === 0 ? arr[i] + arr[i + 1] : null))
    .filter(Boolean);

  // Alternative Implementation using a for loop
  /* let result = [];

  for (let i = 0; i < str.length; i += 2) {
    let pair = str[i] + (str[i + 1] || "_");
    result.push(pair);
  }

  return result; */
};
