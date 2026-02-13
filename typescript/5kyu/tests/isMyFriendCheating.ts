#!/usr/bin/env tsx
import { removeNb } from "../isMyFriendCheating";

console.log(removeNb(26)); // [[15, 21], [21, 15]]

console.log(removeNb(100)); // [[70, 73], [73, 70]]

console.log(removeNb(10)); // []

console.log(removeNb(1)); // []

console.log(removeNb(50)); // []
