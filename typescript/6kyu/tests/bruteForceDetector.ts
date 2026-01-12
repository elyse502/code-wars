#!/usr/bin/env tsx
import detectBruteForce from "../bruteForceDetector";

const logs = [
  "192.168.1.1 LOGIN_FAIL user=admin",
  "192.168.1.1 LOGIN_FAIL user=admin",
  "192.168.1.1 LOGIN_FAIL user=root",
  "10.0.0.5 LOGIN_FAIL user=test",
  "10.0.0.5 LOGIN_SUCCESS user=test",
];

console.log(detectBruteForce(logs));
