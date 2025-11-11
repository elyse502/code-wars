/**
 * Break camelCase
 * 
 * Complete the solution so that the function will break up camel casing, using a space between words.

 * Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
 * 
 * @param {*} string 
 * @returns {string}
 */

exports.solution = (string) => {
  if (!string) return "";

  let result = "";

  // Look at each character in the string
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Check if this character is uppercase
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      // If it's an uppercase letter, add a space before it
      result += " " + char;
    } else {
      // Otherwise, just add the character as is
      result += char;
    }
  }

  return result;
};
