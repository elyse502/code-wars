#!/usr/bin/node
const { numberToString } = require("../numberToString");

console.log(numberToString(numberToString(67)));
console.log(numberToString(numberToString(123)));
console.log(numberToString(numberToString(999)));
console.log(numberToString(numberToString(-100)));
