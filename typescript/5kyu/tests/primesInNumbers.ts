#!/usr/bin/env tsx
import { primeFactors } from "../primesInNumbers";

// "(2**5)(5)(7**2)(11)"
console.log(primeFactors(86240));

// "(17)"
console.log(primeFactors(17));

// "(2**2)"
console.log(primeFactors(4));
