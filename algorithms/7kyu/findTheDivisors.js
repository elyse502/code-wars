/**
 * Find the divisors!
 * 
 * Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

 * Examples:
    divisors(12) --> [2, 3, 4, 6]
    divisors(25) --> [5]
    divisors(13) --> "13 is prime"
 * 
 * @param {*} integer 
 * @returns {number[]} or {string}
 */

exports.divisors = (integer) => {
  let out_put = [];
  for (let i = 2; i < integer; i++) {
    out_put.push(i);
  }

  out_put = out_put.filter((num) => integer % num === 0);

  return out_put.length ? out_put : `${integer} is prime`;

  // Alternative, optimized by generating only the necessary range:
  /* const divisors = [];
  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i === 0) {
      divisors.push(i);
      if (i !== integer / i) divisors.push(integer / i);
    }
  }
  
  const result = divisors.sort((a, b) => a - b);
  return result.length ? result : `${integer} is prime`; */
};
