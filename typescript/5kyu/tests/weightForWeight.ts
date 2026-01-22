#!/usr/bin/env tsx
import { orderWeight } from "../weightForWeight";

console.assert(
  orderWeight("56 65 74 100 99 68 86 180 90") ===
    "100 180 90 56 65 74 68 86 99",
);

console.assert(orderWeight("103 123 4444 99 2000") === "2000 103 123 4444 99");

console.assert(orderWeight("  56   65  74 ") === "56 65 74");

console.assert(orderWeight("") === "");

console.assert(orderWeight("90 180") === "180 90");
