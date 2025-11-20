/**
 * Swap Node Pairs In Linked List
 * 
 * You are given the head node of a singly-linked list. Write a method that swaps each pair of nodes in the list, then returns the head node of the list. You have to swap the nodes themselves, not their values.

 * Example:

    (A --> B --> C --> D) => (B --> A --> D --> C)

* The swapping should be done left to right, so if the list has an odd length, the last node stays in place:

    (A --> B --> C) => (B --> A --> C)

 * The list will be composed of Nodes of the following specification:

    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

exports.swapPairs = (head) => {
  // Handle empty list or single node
  if (!head || !head.next) {
    return head;
  }

  // Create a dummy node to simplify edge cases
  const dummy = new Node(0);
  dummy.next = head;
  let current = dummy;

  // Swap pairs while we have at least two nodes ahead
  while (current.next && current.next.next) {
    const first = current.next;
    const second = current.next.next;

    // Swap the pair
    first.next = second.next;
    second.next = first;
    current.next = second;

    // Move to the next pair
    current = first;
  }

  return dummy.next;
};
