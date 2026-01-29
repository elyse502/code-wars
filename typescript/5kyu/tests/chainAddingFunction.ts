#!/usr/bin/env tsx
import add from "../chainAddingFunction";

console.log(+add(1)(2)(3)); // 6
console.log(+add(1)(2)); // 3
console.log(+add(1)(2)(3)(4)); // 10
console.log(+add(1)); // 1

const addTwo = add(2);

console.log(+addTwo); // 2
console.log(addTwo + 5); // 7
console.log(+addTwo(3)); // 5
console.log(+addTwo(3)(5)); // 10
