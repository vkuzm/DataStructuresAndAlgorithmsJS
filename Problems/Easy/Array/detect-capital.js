
// Time: O(n)
// Space: O(1)
var detectCapitalUse = function(word) {
  let upperCaseCounter = 0;
  const firstChar = word.charAt(0);

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);

    if (char === char.toUpperCase()) {
      upperCaseCounter++;
    }
  }

  if (upperCaseCounter === 0
    || upperCaseCounter === word.length
    || firstChar === firstChar.toUpperCase() && upperCaseCounter === 1) {
    return true;
  }

  return false;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("hello"));
console.log(detectCapitalUse("Super"));
console.log(detectCapitalUse("NoooooN"));