#!/usr/bin/env tsx
import { high } from "../highestScoringWord";

console.log(high("man i need a taxi up to ubud")); // "taxi"
console.log(high("what time are we climbing up the volcano")); // "volcano"
console.log(high("take me to semynak")); // "semynak"
console.log(high("massage yes massage yes massage")); // "massage"
console.log(high("take two bintang and a dance please")); // "bintang"
console.log(high("aa b")); // "aa"
console.log(high("b aa")); // "b"
console.log(high("bb d")); // "bb"
console.log(high("d bb")); // "d"
console.log(high("aaa b")); // "aaa"
