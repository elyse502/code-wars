#!/usr/bin/node
const { getSum } = require("../sumOfNumbers");

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log("--- Additional Tests ---");
console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));
