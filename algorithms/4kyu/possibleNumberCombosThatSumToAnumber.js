/**
 * Find all possible number combos that sum to a number
 * 
 * Jon and Joe have received equal marks in the school examination. But, they won't reconcile in peace when equated with each other. To prove his might, Jon challenges Joe to write a program to find all possible number combos that sum to a given number. While unsure whether he would be able to accomplish this feat or not, Joe accpets the challenge. Being Joe's friend, your task is to help him out.

 * Task
 * Create a function combos, that accepts a single positive integer num (30 > num > 0) and returns an array of arrays of positive integers that sum to num.

* Notes
    1. Sub-arrays may or may not have their elements sorted.
    2. The order of sub-arrays inside the main array does not matter.
    3. For an optimal solution, the following operation should complete within 6000ms.
 * Sample
        combos(3) => [ [ 3 ], [ 1, 1, 1 ], [ 1, 2 ] ]
        combos(10) => [ [ 10 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
            [ 1, 1, 1, 1, 1, 1, 1, 3 ],
            [ 1, 1, 1, 1, 1, 1, 4 ],
            [ 1, 1, 1, 1, 1, 5 ],
            [ 1, 1, 1, 1, 6 ],
            [ 1, 1, 1, 7 ],
            [ 1, 1, 8 ],
            [ 1, 9 ],
            [ 1, 1, 1, 1, 1, 1, 2, 2 ],
            [ 1, 1, 1, 1, 1, 2, 3 ],
            [ 1, 1, 1, 1, 2, 4 ],
            [ 1, 1, 1, 1, 2, 2, 2 ],
            [ 1, 1, 1, 1, 3, 3 ],
            [ 1, 1, 1, 2, 5 ],
            [ 1, 1, 1, 2, 2, 3 ],
            [ 1, 1, 1, 3, 4 ],
            [ 1, 1, 2, 6 ],
            [ 1, 1, 2, 2, 4 ],
            [ 1, 1, 2, 2, 2, 2 ],
            [ 1, 1, 2, 3, 3 ],
            [ 1, 1, 3, 5 ],
            [ 1, 1, 4, 4 ],
            [ 1, 2, 7 ],
            [ 1, 2, 2, 5 ],
            [ 1, 2, 2, 2, 3 ],
            [ 1, 2, 3, 4 ],
            [ 1, 3, 6 ],
            [ 1, 3, 3, 3 ],
            [ 1, 4, 5 ],
            [ 2, 8 ],
            [ 2, 2, 6 ],
            [ 2, 2, 2, 4 ],
            [ 2, 2, 2, 2, 2 ],
            [ 2, 2, 3, 3 ],
            [ 2, 3, 5 ],
            [ 2, 4, 4 ],
            [ 3, 7 ],
            [ 3, 3, 4 ],
            [ 4, 6 ],
            [ 5, 5 ] ]
 * 
 * @param {*} num 
 * @returns {Array} An array of arrays, where each inner array contains a combination of numbers that sum up to the input number.
 */

exports.combos = (num) => {
  const result = [];

  function backtrack(start, remaining, path) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= remaining; i++) {
      path.push(i);
      backtrack(i, remaining - i, path);
      path.pop();
    }
  }

  backtrack(1, num, []);
  return result;
};
