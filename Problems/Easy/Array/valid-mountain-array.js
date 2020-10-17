
// https://leetcode.com/problems/valid-mountain-array/
// Time: O(n)
// Space: O(1)
const validMountainArray = function (A) {
  const size = A.length;
  let i = 0;

  while (A[i] < A[i + 1] && i + 1 < size) {
    i++;
  }

  if (i === 0 || i === size - 1) {
    return false;
  }

  while (A[i] > A[i + 1] && i + 1 < size) {
    i++;
  }

  return i === size - 1;
};

console.log(validMountainArray([0,2,3,4,5,2,1,0]));
console.log(validMountainArray([0,2]));