

var isValid = function(s) {
  const stack = [];
  const chars = s.split('');

  for (const char of chars) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' && stack.length && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (char === ']' && stack.length && stack[stack.length - 1] === '[') {
      stack.pop();
    } else if (char === '}' && stack.length && stack[stack.length - 1] === '{') {
      stack.pop();
    } else {
       return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));