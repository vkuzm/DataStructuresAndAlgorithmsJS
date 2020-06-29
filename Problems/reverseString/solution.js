
// Create a function that reverses a string:
// 'Hello world' should be: dlrow olleH

console.log(reverse('Hello world'));
console.log(reverse2('Hello world'));
console.log(reverse3('Hello world'));

// Time Complexity = O(n)
// Space Complexity = O(1)
function reverse(string) {
  if (string.length < 2) {
    return 'Enter 2 or more chars';
  }

  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

// Time Complexity = O(n)
// Space Complexity = O(n)
function reverse2(string) {
  const backwards = [];
  const totalItems = string.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(string[i]);
  }
  return backwards.join('');
}

// Time Complexity = O(n)
// Space Complexity = O(1)
function reverse3(string) {
  return string.split('').reverse().join('');
}