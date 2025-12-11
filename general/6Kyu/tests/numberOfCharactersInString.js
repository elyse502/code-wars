#!/usr/bin/node
const { count } = require("../numberOfCharactersInString");

console.log(count("aabbccc"));
console.log(count("hello world"));
console.log(count("123321"));
console.log(count(""));
console.log(count("a"));
console.log(count("aa"));
console.log(count("AaBbCc"));
