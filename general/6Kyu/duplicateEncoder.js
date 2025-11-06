/**
 * 
 * Duplicate Encoder
 * 
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

 * Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
 * Notes
 * Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 * 
 * @param {*} word 
 * @returns {string}
 */

exports.duplicateEncode = (word) => {
  // Convert to lowercase (ignore capitalization)
  const lower = word.toLowerCase();

  // Build a frequency map
  const freq = {};
  for (const char of lower) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Map each character to "(" or ")"
  let result = "";
  for (const char of lower) {
    result += freq[char] > 1 ? ")" : "(";
  }

  return result;

  // Alternative concise solution
  /* return word
    .toLowerCase()
    .split("")
    .map(function (char, _, arr) {
      return arr.indexOf(char) == arr.lastIndexOf(char) ? "(" : ")";
    })
    .join(""); */
};
