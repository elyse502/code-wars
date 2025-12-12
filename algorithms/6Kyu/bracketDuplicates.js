/**
 * Bracket Duplicates
 * 
 * Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

 * For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

 * Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
 *
 * @param {*} string
 * @returns {string}
 */

exports.stringParse = (string) => {
  if (typeof string !== "string") return "Please enter a valid string";

  let result = "";
  let i = 0;

  while (i < string.length) {
    const char = string[i];

    const isLetter =
      (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

    if (!isLetter) {
      result += char;
      i++;
      continue;
    }

    // Count consecutive same letters
    let count = 1;
    while (i + count < string.length && string[i + count] === char) {
      count++;
    }

    if (count <= 2) {
      result += char.repeat(count);
    } else {
      result += char + char + "[" + char.repeat(count - 2) + "]";
    }

    i += count;
  }

  return result;
};
