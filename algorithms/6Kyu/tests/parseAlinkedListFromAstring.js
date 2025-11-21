#!/usr/bin/node
const { parse } = require("../parseAlinkedListFromAstring.js");

// Test helper to visualize the list
function printList(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(" -> ") + " -> null";
}

// Test cases
console.log(printList(parse("1 -> 2 -> 3 -> null")));
// "1 -> 2 -> 3 -> null"

console.log(printList(parse("0 -> 1 -> 4 -> 9 -> 16 -> null")));
// "0 -> 1 -> 4 -> 9 -> 16 -> null"

console.log(parse("null")); // null
console.log(parse("5 -> null")); // Node with data: 5, next: null
