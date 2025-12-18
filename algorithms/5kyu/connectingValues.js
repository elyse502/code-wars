/**
 * Connecting Values
 * 
 * Given a two-dimensional array of non negative integers arr, a value val, and a coordinate coord in the form (row, column), return an iterable (depending on the language) of all of the coordinates that contain the given value and are connected to the original coordinate by the given value.
 * A connection to the original coordinate is considered valid as long as there is a path of pairwise connected cells, horizontally, vertically, or diagonally.

 * If the value of arr at coord is not equal to val, return an empty iterable. The coordinates must include the original coordinate and may be in any order.

 * Examples:
    * With the following array:

        [1,0,2,0,2,1]
        [1,0,2,1,5,7]
        [4,1,1,0,1,9]
    * With val 1 and coord (0, 0), the output should contain (the order doesn't matter and the actual data structure depends on the language):

        [(2, 4), (2, 1), (0, 0), (2, 2), (1, 0), (1, 3)]
    * With value 2 and coord (0, 2):

        [(0, 2), (1, 2)]
    * With value 0 and coord (0, 0), the output should be empty.
 * 
 * @param {*} arr 
 * @param {*} val 
 * @param {*} coord 
 * @returns {Array<Array<number>>}
 */

exports.connectedValues = (arr, val, coord) => {
  const rows = arr.length;
  if (rows === 0) return [];

  const cols = arr[0].length;
  const [sr, sc] = coord;

  if (sr < 0 || sr >= rows || sc < 0 || sc >= cols || arr[sr][sc] !== val) {
    return [];
  }

  const result = [];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const queue = [[sr, sc]];
  visited[sr][sc] = true;

  while (queue.length) {
    const [r, c] = queue.shift();
    result.push([r, c]);

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !visited[nr][nc] &&
        arr[nr][nc] === val
      ) {
        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }

  return result;
};
