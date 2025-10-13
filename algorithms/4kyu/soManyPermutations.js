/**
 * So Many Permutations!
 * 
 * In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.
 * Create as many "shufflings" as you can!

 * Examples:

  With input 'a':
  Your function should return: ['a']

  With input 'ab':
  Your function should return ['ab', 'ba']

  With input 'abc':
  Your function should return ['abc','acb','bac','bca','cab','cba']

  With input 'aabb':
  Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

 * Note: The order of the permutations doesn't matter.
 * 
 */

exports.permutations = (string) => {
  const results = new Set();

  function permute(str, prefix = "") {
    if (str.length === 0) {
      results.add(prefix);
    } else {
      for (let i = 0; i < str.length; i++) {
        const newStr = str.slice(0, i) + str.slice(i + 1);
        permute(newStr, prefix + str[i]);
      }
    }
  }

  permute(string);
  return Array.from(results);
};
