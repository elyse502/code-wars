#!/usr/bin/node
const { submitOrder } = require("../promisesMadeAndBroken");

// Test the function
async function testSubmitOrder() {
  console.log("Testing submitOrder with user 12345...");

  try {
    const result = await submitOrder(12345);
    console.log("Test result:", result ? "PASSED" : "FAILED");
  } catch (error) {
    console.error("Test ERROR:", error.message);
  }
}

testSubmitOrder();
