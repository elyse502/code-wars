#!/usr/bin/node
const { fib } = require("../the_Millionth_Fibonacci_Kata");

console.log(String(fib(0))); // 0
console.log(String(fib(1))); // 1
console.log(String(fib(10))); // 55
console.log(String(fib(-10))); // -55
console.log(String(fib(100))); // 354224848179261915075n
