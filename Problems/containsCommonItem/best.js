// Given 2 arrays, create a function that let's a user know (true / false)
// whether these two arrays contain any common items

// Example 1:
// ['a', 'b', 'c', 'x']
// ['z', 'y', 'i']
// return false

// Example 2:
// ['a', 'b', 'c', 'x']
// ['z', 'y', 'x']
// return true

// Do we need improve time or space complexity?: Time

// Solution: Best
// Time Complexity = O(n + m)
// Space Complexity = O(n)

const array1_1 = ["a", "b", "c", "x"];
const array2_1 = ["z", "y", "i"];

const array1_2 = ["a", "b", "c", "x"];
const array2_2 = ["z", "y", "x"];

console.log(containsCommonItem(array1_1, array2_1));
console.log(containsCommonItem(array1_2, array2_2));

function containsCommonItem(array1, array2) {
  if (array1.length === 0 || array2.length === 0) {
    return false;
  }

  const set = new Set();
  for (let item of array1) {
    set.add(item);
  }

  for (let item of array2) {
    if (set.has(item)) {
      return true;
    }
  }
  return false;
}