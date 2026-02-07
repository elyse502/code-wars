#!/usr/bin/node
const { getPINs } = require("../observerPIN");

// Basic test cases
console.log(getPINs("8"));
// Expected: ['8', '5', '7', '9', '0']
// 8 is adjacent to 5, 7, 9, and 0

console.log(getPINs("11"));
// Expected: ['11', '12', '14', '21', '22', '24', '41', '42', '44']
// Each '1' can be 1, 2, or 4
// 3 × 3 = 9 combinations

console.log(getPINs("369"));
// Expected: ['339', '366', '399', '658', '659', '629', '692', '699', '668', '
//            '369', '398', '332', '338', '668', '638', '699', '693', '666']
// 3: [3, 2, 6]
// 6: [6, 3, 5, 9]
// 9: [9, 6, 8]
// 3 × 4 × 3 = 36 combinations

// Edge cases
console.log(getPINs("0"));
// Expected: ['0', '8']
// 0 only has itself and 8

console.log(getPINs("5"));
// Expected: ['5', '2', '4', '6', '8']
// 5 is in the center, has most adjacents

console.log(getPINs("1357"));
// Expected: 3 × 3 × 5 × 3 = 135 variations
// Too many to list, but includes combinations like:
// '1357', '1358', '1457', '2357', '4357', etc.

// Test with leading zeros
console.log(getPINs("08"));
// Expected: ['08', '88', '05', '85', '07', '87', '09', '89', '00', '80']
// Should maintain string format to preserve leading zero

// Longer PIN
console.log(getPINs("12345"));
// Expected: 3 × 4 × 3 × 4 × 5 = 720 variations

// Verify it returns array of strings
const result = getPINs("1");
console.log(Array.isArray(result)); // true
console.log(typeof result[0]); // 'string'

// Test all corner positions
console.log(getPINs("1").sort()); // ['1', '2', '4']
console.log(getPINs("3").sort()); // ['2', '3', '6']
console.log(getPINs("7").sort()); // ['4', '7', '8']
console.log(getPINs("9").sort()); // ['6', '8', '9']

// Test all positions
const adjacencyTests = {
  0: ["0", "8"],
  1: ["1", "2", "4"],
  2: ["1", "2", "3", "5"],
  3: ["2", "3", "6"],
  4: ["1", "4", "5", "7"],
  5: ["2", "4", "5", "6", "8"],
  6: ["3", "5", "6", "9"],
  7: ["4", "7", "8"],
  8: ["0", "5", "7", "8", "9"],
  9: ["6", "8", "9"],
};

for (let digit in adjacencyTests) {
  const result = getPINs(digit).sort();
  const expected = adjacencyTests[digit].sort();
  console.log(
    `${digit}: ${JSON.stringify(result) === JSON.stringify(expected) ? "PASS" : "FAIL"}`,
  );
}

// Performance test (optional)
console.time("getPINs");
const largeResult = getPINs("12345678"); // This will generate a LOT of combinations
console.log(`Generated ${largeResult.length} combinations`);
console.timeEnd("getPINs");

// Verify no duplicates
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log('Has duplicates in getPINs("11"):', hasDuplicates(getPINs("11"))); // false
console.log('Has duplicates in getPINs("8"):', hasDuplicates(getPINs("8"))); // false
