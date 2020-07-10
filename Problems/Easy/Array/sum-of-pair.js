
// Constraints: unsorted, array, not the same index item
// Input 1: [1, 2, 3, 9] = false
// Input 2: [1, 2, 4, 4] = true
// Output: true or false


// Solution #1: Brute force
// Time Complexity = O(n^2)
// Space Complexity = O(1)
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
console.log(findSumOfPair([1, 2, 4, 4], 8));


// Solution #2: Best
// Time Complexity = O(n)
// Space Complexity = O(n)
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
console.log(findSumOfPair([1, 2, 4, 4], 8));
