#!/usr/bin/node
const missingWord = require('../missingWord').missingWord;

console.log(missingWord([0, 3, 5], "I love you"));
console.log(missingWord([7, 10, 1], "see you later"));
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"));
console.log(missingWord([12, 4, 6], "Good Morning"));
console.log(missingWord([1, 16, 21], "A purple pig and a green donkey flew a kite in the middle of the night"));
console.log(missingWord([35, 8, 20], "A song can make or ruin your day if you let it get to you"));
console.log(missingWord([20, 3, 27], "I love eating toasted cheese and tuna"));
console.log(missingWord([50, 4, 6], "Hi everybody"));