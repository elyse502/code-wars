#!/usr/bin/node
const stripComments = require("../stripComments").solution;

function runTests() {
  const tests = [
    {
      input: [
        "apples, pears # and bananas\ngrapes\nbananas !apples",
        ["#", "!"],
      ],
      expected: "apples, pears\ngrapes\nbananas",
    },
    {
      input: ["apples # comment ! another", ["#", "!"]],
      expected: "apples",
    },
    {
      input: ["apples, pears\nbananas", ["#", "!"]],
      expected: "apples, pears\nbananas",
    },
    {
      input: ["# comment\napples", ["#"]],
      expected: "\napples",
    },
    {
      input: ["apples, pears   # comment", ["#"]],
      expected: "apples, pears",
    },
    {
      input: ["line1 @ comment\nline2 % comment\nline3", ["@", "%"]],
      expected: "line1\nline2\nline3",
    },
    {
      input: ["", ["#"]],
      expected: "",
    },
    {
      input: ["# comment\n! another", ["#", "!"]],
      expected: "\n",
    },
    {
      input: ["apples # comment\nbananas !apples", ["#", "!"]],
      expected: "apples\nbananas",
    },
    {
      input: ["apples   \nbananas\t\t# comment", ["#"]],
      expected: "apples\nbananas",
    },
    {
      input: ["apples # comment", ["#"]],
      expected: "apples",
    },
    {
      input: ["apples # comment ! another", ["#", "!"]],
      expected: "apples",
    },
    {
      input: ["apples . comment\nbananas * test", [".", "*"]],
      expected: "apples\nbananas",
    },
    {
      input: [
        "apples # comment\nbananas ! comment\ncherries % comment",
        ["#", "!", "%"],
      ],
      expected: "apples\nbananas\ncherries",
    },
    {
      input: ["apples # comment\nbananas", []],
      expected: "apples # comment\nbananas",
    },
    {
      input: ["apples, pears\nbananas", ["@", "%"]],
      expected: "apples, pears\nbananas",
    },
    {
      input: ["   # comment", ["#"]],
      expected: "",
    },
    {
      input: ["apples # comment # another", ["#"]],
      expected: "apples",
    },
    {
      input: ["apples#comment", ["#"]],
      expected: "apples",
    },
    {
      input: ["apples   #", ["#"]],
      expected: "apples",
    },
  ];

  let passed = 0;
  let failed = 0;

  tests.forEach((test, index) => {
    const result = stripComments(...test.input);
    if (result === test.expected) {
      console.log(`Test ${index + 1}: PASSED`);
      passed++;
    } else {
      console.log(`Test ${index + 1}: FAILED`);
      console.log(`  Expected: "${test.expected}"`);
      console.log(`  Got:      "${result}"`);
      failed++;
    }
  });

  console.log(`\nTotal: ${tests.length}, Passed: ${passed}, Failed: ${failed}`);
}

// Run the tests
runTests();
