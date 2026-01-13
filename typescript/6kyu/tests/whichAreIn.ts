#!/usr/bin/env tsx
import inArray from "../whichAreIn";

const a1 = ["arp", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));
// ["arp", "live", "strong"]

console.log(inArray(["tarp", "mice", "bull"], a2));
// []
