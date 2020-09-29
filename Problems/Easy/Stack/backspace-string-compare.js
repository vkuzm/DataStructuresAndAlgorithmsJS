
// Time Complexity: O(n+m)
// Space Complexity: O(n+m)
const backspaceCompare = function (S, T) {
  if (S.length === 0 || T.length === 0) {
    return false;
  }
  return build(S) === build(T);
};

function build(string) {
  const stack = [];

  for (let char of string) {
    if (char !== '#') {
      stack.push(char);
    } else if (stack.length > 0) {
      stack.pop();
    }
  }
  return stack.toString();
}

console.log(backspaceCompare("ab#c", "ad#c"));