#!/usr/bin/node
const { solve } = require("../poppingBallons-doubleTrouble");

const tests = [
  ["wbb", 3, 1],
  ["wbb", 2, 2],
  ["RG", 3, 5],
];

for (const [s, n, k] of tests) {
  console.log(s, n, k, "->", solve(s, n, k));
}
