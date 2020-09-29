
// Time: O(n)
// Space: O(n)
var plusOne = function(digits) {

  const n = digits.length;
  for (let i = n-1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  return [1, ...digits];
};

console.log(plusOne([1,2,9]));