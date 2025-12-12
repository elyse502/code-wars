#!/usr/bin/node
const { stringParse } = require("../bracketDuplicates");

console.log(stringParse("aaaabbcdefffffffg")); // "aa[aa]bbcdeff[fffff]g"
console.log(stringParse("boopdedoop")); // "boopdedoop"
console.log(stringParse("helloookat")); // "helloo[o]kat"
console.log(stringParse(123)); // "Please enter a valid string"
console.log(stringParse(null)); // "Please enter a valid string"
