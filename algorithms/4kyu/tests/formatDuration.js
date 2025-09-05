#!/usr/bin/node
const formatDuration = require("../formatDuration").formatDuration;

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
