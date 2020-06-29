
// Constraints: unsorted, array, not the same index item
// Input 1: [1, 2, 3, 9] = false
// Input 2: [1, 2, 4, 4] = true
// Output: true or false

// Do we need improve time or space complexity?: Time

// Solution: Best
// Time Complexity = O(n)
// Space Complexity = O(n)

const array1 = [1, 2, 3, 9];
const array2 =  [1, 2, 4, 4];

console.log(findSumOfPair(array2, 8));

function findSumOfPair(data, sum) {
  if (data.length < 2) {
    return false;
  }

  const comp = new Set();
  for (let value of data) {
    if (comp.has(value)) {
      return true;
    }
    comp.add(sum - value);
  }
  return false;
}