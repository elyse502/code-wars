#!/usr/bin/env tsx
import { productFib } from "../productOfConsecutiveFibNumbers";

// [21, 34, true]
console.log(productFib(714));

// [34, 55, false]
console.log(productFib(800));

// [55, 89, true]
console.log(productFib(4895));

// [89, 144, false]
console.log(productFib(5895));

// [0, 1, true]
console.log(productFib(0));

// [1, 1, true]
console.log(productFib(1));
