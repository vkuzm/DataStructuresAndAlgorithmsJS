
// Constraints: unsorted, array, not the same index item
// Input 1: [1, 2, 3, 9] = false
// Input 2: [1, 2, 4, 4] = true
// Output: true or false

// Do we need improve time or space complexity?: Space

// Solution: Brute force
// Time Complexity = O(n^2)
// Space Complexity = O(1)

const array1 = [1, 2, 3, 9];
const array2 =  [1, 2, 4, 4];

console.log(findSumOfPair(array2, 8));

function findSumOfPair(data, sum) {
  if (data.length < 2) {
    return false;
  }

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const sumOfPair = data[i] + data[j];
      if (sumOfPair === sum) {
        return true;
      }
    }
  }
  return false;
}