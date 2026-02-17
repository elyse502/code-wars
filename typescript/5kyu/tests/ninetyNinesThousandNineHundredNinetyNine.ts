#!/usr/bin/env tsx
import { numberToEnglish } from "../ninetyNinesThousandNineHundredNinetyNine";

// Usecases
console.log(numberToEnglish(0)); // zero
console.log(numberToEnglish(7)); // seven
console.log(numberToEnglish(13)); // thirteen
console.log(numberToEnglish(27)); // twenty seven
console.log(numberToEnglish(100)); // one hundred
console.log(numberToEnglish(342)); // three hundred forty two
console.log(numberToEnglish(1000)); // one thousand
console.log(numberToEnglish(7012)); // seven thousand twelve
console.log(numberToEnglish(20000)); // twenty thousand
console.log(numberToEnglish(99205)); // ninety nine thousand two hundred five

// Invalid use cases
console.log(numberToEnglish(-1)); // ""
console.log(numberToEnglish(100000)); // ""
console.log(numberToEnglish(12.5)); // ""
