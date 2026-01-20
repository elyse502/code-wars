#!/usr/bin/env tsx
import { comp } from "../areTheyTheSame";

// Valid case
const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a1, a2));
// true

// Invalid case
const b1 = [121, 144, 19];
const b2 = [121, 36100, 361];

console.log(comp(b1, b2));
// false

// Null case
console.log(comp(null, [1, 4, 9]));
// false
