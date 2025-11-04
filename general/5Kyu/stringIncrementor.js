/**
 * 
 * String incrementer
 * 
 * Your job is to write a function which increments a string, to create a new string.

    - If the string already ends with a number, the number should be incremented by 1.
    - If the string does not end with a number. the number 1 should be appended to the new string.
    
 * Examples:

    foo -> foo1

    foobar23 -> foobar24

    foo0042 -> foo0043

    foo9 -> foo10

    foo099 -> foo100

 * Attention: If the number has leading zeros the amount of digits should be considered.
 * 
 * @param {*} strng 
 * @returns {string}
 */

exports.incrementString = (strng) => {
  let i = strng.length - 1;

  // Move backwards to find where the number starts
  while (i >= 0 && strng[i] >= "0" && strng[i] <= "9") {
    i--;
  }

  // Separate the text part and numeric part
  const prefix = strng.slice(0, i + 1);
  const numberPart = strng.slice(i + 1);

  // If no number part, just append '1'
  if (numberPart === "") return prefix + "1";

  // Increment the numeric part while keeping leading zeros
  const incremented = String(Number(numberPart) + 1);
  const padded = incremented.padStart(numberPart.length, "0");

  // Return combined result
  return prefix + padded;
};
