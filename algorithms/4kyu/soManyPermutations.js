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
