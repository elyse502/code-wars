#!/usr/bin/node
const { arrayDiff } = require("../arrayDiff");

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2], [1]));
