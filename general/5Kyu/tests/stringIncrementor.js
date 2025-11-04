#!/usr/bin/node
const { incrementString } = require("../stringIncrementor");

console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar00999"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar1"));
console.log(incrementString("1"));
console.log(incrementString("009"));
console.log(incrementString("fo99obar99"));
