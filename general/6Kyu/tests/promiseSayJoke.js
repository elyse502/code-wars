#!/usr/bin/env node
const { sayJoke } = require("../promiseSayJoke");

sayJoke("http://great.jokes/christmas", 101)
  .then((joke) => {
    console.log(joke.saySetup());
    console.log(joke.sayPunchLine());
  })
  .catch((err) => console.error(err.message));
