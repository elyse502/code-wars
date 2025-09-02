#!/usr/bin/node
const humanReadable = require("../humanReadable").humanReadable;

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(3600));
console.log(humanReadable(45296));
console.log(humanReadable(86399));
console.log(humanReadable(86400));
console.log(humanReadable(359999));
