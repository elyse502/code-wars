/**
 * 
 * Reversed Strings
 * 
 * Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow'
 * 
 * @param {*} str 
 * @returns {string}
 */

exports.reversedStrings = (str) =>
  str.split("").reduceRight((acc, char) => acc + char, "");
