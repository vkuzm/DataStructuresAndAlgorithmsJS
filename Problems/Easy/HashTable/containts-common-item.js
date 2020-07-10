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


// Solution #1: Bad
// Time Complexity = O(n^2) => O(a*b) (more precisely)
// Space Complexity = O(1)
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
console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));


// Solution #2: Best
// Time Complexity = O(n + m)
// Space Complexity = O(n)
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
console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));
