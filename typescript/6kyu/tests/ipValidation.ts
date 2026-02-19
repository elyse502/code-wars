#!/usr/bin/env tsx
import { isValidIP } from "../ipValidation";

console.log(isValidIP("1.2.3.4")); // true
console.log(isValidIP("123.45.67.89")); // true

console.log(isValidIP("1.2.3")); // false
console.log(isValidIP("1.2.3.4.5")); // false
console.log(isValidIP("123.456.78.90")); // false

console.log(isValidIP("123.045.067.089")); // false
console.log(isValidIP("01.2.3.4")); // false
console.log(isValidIP("0.0.0.0")); // true
console.log(isValidIP("255.255.255.255")); // true
console.log(isValidIP("256.1.1.1")); // false
console.log(isValidIP("1.1.1.-1")); // false
console.log(isValidIP("1.1.1.1 ")); // false
