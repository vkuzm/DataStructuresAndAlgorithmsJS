
// Time Complexity = O(n)
// Space Complexity = O(n)
var firstUniqChar = function(s) {
  const chars = s.split('');
  const map = {};

  for (let i = 0; i < chars.length; i++) {
    if (map[chars[i]]) {
      map[chars[i]]++;
    } else {
      map[chars[i]] = 1;
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (map[chars[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));