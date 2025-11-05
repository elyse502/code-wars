#!/usr/bin/node
const { duplicateCount } = require("../countingDuplicates");

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("aA11bb"));
