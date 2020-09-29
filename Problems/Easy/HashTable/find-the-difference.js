
// Time: O(n+m)
// Space: O(n)
const findTheDifference = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const current = s.charAt(i);
    if (!map.get(current)) {
      map.set(current, 1);
    } else {
      map.set(current, map.get(current) + 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const current = t.charAt(i);
    if (map.has(current) && map.get(current) === 0 || !map.has(current)) {
      return current;
    } else {
      map.set(current, map.get(current) - 1);
    }
  }

  return '!';
};

console.log(findTheDifference('abcd', 'abcde'));