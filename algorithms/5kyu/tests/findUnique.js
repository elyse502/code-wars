#!/usr/bin/node
const findUniq = require("../findUnique").findUniq;

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
console.log(findUniq(["   ", "a", "A", "aa", "aaa"]));
