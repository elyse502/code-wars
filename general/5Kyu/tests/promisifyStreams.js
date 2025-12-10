#!/usr/bin/env node
const { promisify } = require("../promisifyStreams");

function readStream(callback) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => callback(i), i * 200);
  }
  setTimeout(() => callback(null), 1200);
}

async function test() {
  let p = promisify(readStream);

  while (true) {
    let [data, next] = await p;

    if (data === null) {
      console.log("done");
      break;
    }

    console.log("received:", data);
    p = next;
  }
}

test();
