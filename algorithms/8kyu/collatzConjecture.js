/**
 * 
 * Collatz Conjecture (3n+1)
 * 
 * Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

 * #Examples

    hotpo(1) returns 0
    (1 is already 1)

    hotpo(5) returns 5
    5 -> 16 -> 8 -> 4 -> 2 -> 1

    hotpo(6) returns 8
    6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

    hotpo(23) returns 15
    23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 * #References

 * Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture
 * 
 * @param {*} n 
 * @returns {number}
 */

exports.hotpo = (n) => {
  if (n <= 1) return 0;

  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps++;
  }

  return steps;
};
