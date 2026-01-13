/**
 * Not very secure
 * 
 * In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

 * The string has the following conditions to be alphanumeric:

    * At least one character ("" is not valid)
    * Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    * No whitespaces / underscore
 * 
 * @param str 
 * @returns 
 */

export default function alphanumeric(str: string): boolean {
  if (str.length === 0) return false;

  for (const ch of str) {
    const code = ch.charCodeAt(0);

    const isDigit = code >= 48 && code <= 57;
    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;

    if (!isDigit && !isUpper && !isLower) {
      return false;
    }
  }

  return true;
}
