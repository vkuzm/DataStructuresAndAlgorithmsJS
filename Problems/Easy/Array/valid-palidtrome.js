
// Solution
// Time Complexity = O(n)
// Space Complexity = O(1)
var isPalindrome = function(s) {
  if (s.length === 0) return true;

  const chars = s.toLowerCase()
  .replace(/[^A-Za-z0-9]+/g, '');

  for (let i = 0; i < chars.length; i++) {
    const lastIndex = chars.length - 1 - i;

    if (chars.charAt(i) !== chars.charAt(lastIndex)) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));