
// https://leetcode.com/problems/group-anagrams/
// Time: O(nmlogm)- time complexity would be O(nmlogm) where n is the max number of words
// we can receive in "strs" and m is the largest size a word in "strs" can be.
// Space: O(n)
var groupAnagrams = function(strs) {
  const result = [];
  const map = new Map();

  for (let currentStr of strs) {
    const characters = toCharArray(currentStr);

    characters.sort();

    const sortedStr = characters.toString();

    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    map.get(sortedStr).push(currentStr);
  }

  for (let value of map.values()) {
    result.push(value);
  }

  return result;
};

function toCharArray(value) {
  const characters = [];
  for (let i = 0; i < value.length; i++) {
    characters.push(value.charAt(i));
  }
  return characters;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));