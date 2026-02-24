#!/usr/bin/node
const { combos } = require("../possibleNumberCombosThatSumToAnumber");

[3, 4, 5].forEach((n) => {
  const result = combos(n);
  console.log(result);
  console.log(`=> The Array of combos of ${n} has Length: ${result.length}`);
});
