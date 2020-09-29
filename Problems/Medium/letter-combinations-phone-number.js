
// Time: 3^n where n is the number of letters
// Space: O(n)
const letterCombinations = function (digits) {
  const result = [];
  if (digits.length === 0) {
    return result;
  }
  const mapping = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  letterCombinationRecursive(result, '', 0, digits, mapping);
  return result;
};

const letterCombinationRecursive = function(result, combination, index, digits, mapping) {
  if (digits.length === index) {
    result.push(combination);
    return;
  }

  const letters = mapping[digits.charAt(index) - '0'];
  for (let i = 0; i < letters.length; i++) {
    letterCombinationRecursive(result, combination+letters.charAt(i), index+1, digits, mapping);
  }
};

console.log(letterCombinations('23'));

