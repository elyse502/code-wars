#!/usr/bin/node
const { getState } = require("../promiseState");

async function testGetState() {
  try {
    // Test fulfilled promise
    const p1 = Promise.resolve("success");
    console.log(await getState(p1)); // "fulfilled"

    // Test rejected promise
    const p2 = Promise.reject(new Error("failure"));
    console.log(await getState(p2)); // "rejected"

    // Test pending promise
    const p3 = new Promise(() => {}); // Never settles
    console.log(await getState(p3)); // "pending"

    // Test with async/await
    const p4 = async () => "test";
    console.log(await getState(p4())); // "fulfilled"

    // Test error cases
    console.log(await getState(null)); // Throws TypeError
    console.log(await getState({})); // Throws TypeError
  } catch (error) {
    console.error("Test error:", error.message);
  }
}

testGetState();
