/**
 * Backspaces in string
 * 
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

 * Your task is to process a string with "#" symbols.

 * Examples
    "abc#d##c"      ==>  "ac"
    "abc##d######"  ==>  ""
    "#######"       ==>  ""
    ""              ==>  ""
 * 
 * @param {string} s - The input string containing characters and "#" symbols.
 * @returns {string} - The processed string after applying backspaces.
 */

export function cleanString(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
