#!/usr/bin/node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const { swapPairs } = require("../swapNodePairsInLinkedList");

// Helper function to create linked list from array
function createList(arr) {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

// Test cases
const list1 = createList(["A", "B", "C", "D"]);
console.log(listToArray(swapPairs(list1))); // ['B', 'A', 'D', 'C']

const list2 = createList(["A", "B", "C"]);
console.log(listToArray(swapPairs(list2))); // ['B', 'A', 'C']

const list3 = createList(["A"]);
console.log(listToArray(swapPairs(list3))); // ['A']

const list4 = createList([]);
console.log(listToArray(swapPairs(list4))); // []
