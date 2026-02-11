#!/usr/bin/env tsx
import { cleanString } from "../backspacesInString";

console.log(cleanString("abc#d##c")); // "ac"
console.log(cleanString("abc##d######")); // ""
console.log(cleanString("#######")); // ""
console.log(cleanString("")); // ""
