
// Create a function that reverses a string:
// 'Hello world' should be: dlrow olleH

console.log(reverse('Hello world'));
console.log(reverse2('Hello world'));
console.log(reverse3('Hello world'));
console.log(reverse4('Hello world'));
console.log(reverseRecursion('Hello world'));

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

// Time Complexity = O(n)
// Space Complexity = O(n)
function reverse4(string) {
  const array = string.split('');
  let counter = 0;

  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[counter];
    const firstIndex = counter;
    const lastIndex = array.length - 1 - counter;

    array[firstIndex] = array[lastIndex];
    array[lastIndex] = temp;
    counter++;
  }
  return array.join('');
}

// Time Complexity = O(n)
// Space Complexity = O(1)
function reverseRecursion(str) {
  if (str === '') {
    return '';
  } else {
    return reverseRecursion(str.substr(1)) + str.charAt(0);
  }
}