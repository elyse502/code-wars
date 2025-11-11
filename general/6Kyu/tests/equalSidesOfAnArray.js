#!/usr/bin/node
const { findEvenIndex } = require("../equalSidesOfAnArray");

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([8, 8]));
console.log(findEvenIndex([8, 0]));
console.log(findEvenIndex([0, 8]));
console.log(findEvenIndex([7, 3, -3]));
console.log(findEvenIndex([8]));
console.log(findEvenIndex([0, 0, 0, 0, 0]));
console.log(findEvenIndex([-1, 1, 0, -1, 1, 0, -1, 1, 0, 0]));
