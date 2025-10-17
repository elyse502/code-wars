#!/usr/bin/node
const { listPosition } = require("../alphabeticAnagrams");

// Define test cases
const tests = [
  ["AAAB", 1],
  ["ABAB", 2],
  ["BAAA", 4],
  ["QUESTION", 24572],
  ["BOOKKEEPER", 10743],
  ["A", 1],
  ["AB", 1],
  ["BA", 2],
  ["AAB", 1],
  ["ABA", 2],
  ["BAA", 3],
  ["ABC", 1],
  ["CBA", 6],
  ["ZYX", 6],
  ["BANANA", 35],
];

// Function to run all tests
function runTests() {
  console.log("🧩 Running Alphabetic Anagrams tests...\n");

  let passed = 0;

  for (const [word, expected] of tests) {
    const start = performance.now();
    const actual = listPosition(word);
    const time = (performance.now() - start).toFixed(2);

    const status = actual === expected ? "✅ PASS" : "❌ FAIL";
    console.log(
      `${status} | Word: '${word}' | Expected: ${expected} | Got: ${actual} | Time: ${time}ms`
    );

    if (actual === expected) passed++;
  }

  console.log(
    `\nSummary: ${passed}/${tests.length} tests passed (${(
      (passed / tests.length) *
      100
    ).toFixed(1)}%) ✅`
  );
}

// Run the tests
runTests();
