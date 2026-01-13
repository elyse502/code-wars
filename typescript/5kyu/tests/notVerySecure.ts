#!/usr/bin/env tsx
import alphanumeric from "../notVerySecure";

console.log(alphanumeric("abc123"));
console.log(alphanumeric("abc123"));
console.log(alphanumeric("abc_123"));
console.log(alphanumeric("hello world"));
console.log(alphanumeric(""));
