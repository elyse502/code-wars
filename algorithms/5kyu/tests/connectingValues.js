#!/usr/bin/node
const { connectedValues } = require("../connectingValues");

const grid = [
  [1, 0, 2, 0, 2, 1],
  [1, 0, 2, 1, 5, 7],
  [4, 1, 1, 0, 1, 9],
];

console.log(connectedValues(grid, 1, [0, 0]));
console.log(connectedValues(grid, 2, [0, 2]));
console.log(connectedValues(grid, 0, [0, 0]));
console.log(connectedValues(grid, 5, [1, 4]));
