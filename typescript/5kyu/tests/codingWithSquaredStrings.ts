#!/usr/bin/env tsx
import { code, decode } from "../codingWithSquaredStrings";

const text = "I.was.going.fishing.that.morning.at.ten.o'clock";

const encoded = code(text);
console.log(`=> Encoded:\n${encoded}\n`);

const decoded = decode(encoded);
console.log(`=> Decoded: ${decoded}`);

console.log(`=> decoded === text: ${decoded === text}`);