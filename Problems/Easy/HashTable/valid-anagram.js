
// #1 Brute Force
//Time Complexity:: O(n^2)
//Space Complexity: O(1)

var isAnagram1 = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sChars = s.split('');
  const tChars = t.split('');
  let counter = 0;

  for (let i = 0; i < sChars.length; i++) {
    for (let j = 0; j < tChars.length; j++) {
      if (sChars[i] === tChars[j]) {
        tChars[j] = null;
        counter++;
        break;
      }
    }
  }
  return counter === sChars.length;
};

console.log(isAnagram1("anagram", "nagaram"));



// #2 Best Solution
//Time Complexity: O(n+m)
//Space Complexity: O(n)
const isAnagram2 = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();

  for (let i = 0; i < t.length; i++) {
    const key = t.charAt(i);
    const value = map.get(key);
    if (value) {
      map.set(key, value + 1);
    } else {
      map.set(key, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const key = s.charAt(i);
    const value = map.get(key);

    if (value > 1) {
      map.set(key, value - 1);
    } else {
      map.delete(key);
    }
  }
  return map.size === 0;
};

console.log(isAnagram2("anagram", "nagaram"));