/**
 * Make a spiral
 * 
 * Your task, is to create a NxN spiral with a given size.

 * For example, spiral with size 5 should look like this:

    00000
    ....0
    000.0
    0...0
    00000

 * and with the size 10:

    0000000000
    .........0
    00000000.0
    0......0.0
    0.0000.0.0
    0.0..0.0.0
    0.0....0.0
    0.000000.0
    0........0
    0000000000

 * Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

    [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]

 * Because of the edge-cases for tiny spirals, the size will be at least 5.

 * General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
 * 
 * @param {*} n 
 * @returns spiral
 */

exports.spiralize = (n) => {
  // Initialize matrix with zeros
  const result = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  let start = 0,
    end = n - 1;

  while (start <= end) {
    // Top: left to right
    for (let i = start; i <= end; i++) {
      result[start][i] = 1;
    }

    // Right: top to bottom (skip first)
    for (let i = start + 1; i <= end; i++) {
      result[i][end] = 1;
    }

    // Only continue if we have space for bottom and left
    if (end - start > 1) {
      // Bottom: right to left (skip last)
      for (let i = end - 1; i >= start; i--) {
        result[end][i] = 1;
      }

      // Left: bottom to top (skip last and first+1)
      for (let i = end - 1; i >= start + 2; i--) {
        result[i][start] = 1;
      }
    }

    // Move to inner spiral
    start += 2;
    end -= 2;

    // Connect to next spiral if needed
    if (start <= end) {
      result[start][start - 1] = 1;
    }
  }

  return result;
};
