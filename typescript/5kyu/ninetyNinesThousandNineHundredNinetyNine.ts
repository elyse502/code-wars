/**
 * Ninety Nine Thousand Nine Hundred Ninety Nine
 * 
 * Write a method that takes a number and returns a string of that number in English.

 * Your method should be able to handle any number between 0 and 99999. If the given number is outside of that range or not an integer, the method should return an empty string.

 * Examples
  0      -->  "zero"
  27     -->  "twenty seven"
  100    -->  "one hundred"
  7012   -->  "seven thousand twelve"
  99205  -->  "ninety nine thousand two hundred five"
 * 
 * @param x 
 * @returns {string} The English representation of the number x, or an empty string if x is not a valid integer in the range [0, 99999].
 */

export function numberToEnglish(x: number): string {
  if (!Number.isInteger(x) || x < 0 || x > 99999) {
    return "";
  }

  const ones: string[] = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const teens: string[] = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens: string[] = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function twoDigits(n: number): string {
    if (n < 10) {
      return ones[n];
    }

    if (n < 20) {
      return teens[n - 10];
    }

    const t: number = Math.floor(n / 10);
    const o: number = n % 10;

    if (o === 0) {
      return tens[t];
    }

    return tens[t] + " " + ones[o];
  }

  function threeDigits(n: number): string {
    if (n < 100) {
      return twoDigits(n);
    }

    const h: number = Math.floor(n / 100);
    const rest: number = n % 100;

    if (rest === 0) {
      return ones[h] + " hundred";
    }

    return ones[h] + " hundred " + twoDigits(rest);
  }

  if (x < 1000) {
    return threeDigits(x);
  }

  const thousands: number = Math.floor(x / 1000);
  const remainder: number = x % 1000;

  const thousandPart: string = twoDigits(thousands) + " thousand";

  if (remainder === 0) {
    return thousandPart;
  }

  return thousandPart + " " + threeDigits(remainder);
}
