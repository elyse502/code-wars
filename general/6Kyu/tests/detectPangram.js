#!/usr/bin/node
const { isPangram } = require("../detectPangram");

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("abcdefghijklmnopqrstuvwxy ."));
