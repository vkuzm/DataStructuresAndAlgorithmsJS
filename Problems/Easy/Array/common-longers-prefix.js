
// Time Complexity: O(n)
// Space Complexity O(1)
const commonLongestPrefix = function(words) {
  if (words.length === 0) {
    return '';
  }

  let prefix = words[0];

  for (let i = 1; i < words.length; i++) {
    while (words[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};

console.log(commonLongestPrefix(["flower", "flow", "flight"]));