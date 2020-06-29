// Given 2 arrays, create a function that let's a user know (true / false)
// whether these two arrays contain any common items

// Example 1:
// ['a', 'b', 'c', 'x']
// ['z', 'y', 'i']
// return false

// Example 2:
// ['a', 'b', 'c', 'x']
// ['z', 'y', 'x']
// return

// Do we need improve time or space complexity?: Space

// Solution: Bad
// Time Complexity = O(n^2) => O(a*b) (more precisely)
// Space Complexity = O(1)

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

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}
