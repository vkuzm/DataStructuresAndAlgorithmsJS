
// Solution 1
// Time: O(n)
// Space: O(1)
const sortArrayByParity = (A) => {
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      const temp = A[counter];
      A[counter] = A[i];
      A[i] = temp;
      counter++;
    }
  }
  return A;
};

console.log(sortArrayByParity([3, 1, 2, 4]));


// Solution 2
// Time: O(n)
// Space: O(1)
const sortArrayByParity2 = (A) => {
  let start = 0;
  let end = A.length - 1;

  while (start < end) {
    if (A[start] % 2 > A[end] % 2) {
      const temp = A[start];
      A[start] = A[end];
      A[end] = temp;
    }

    if (A[start] % 2 === 0) start++;
    if (A[end] % 2 === 1) end--;
  }
  return A;
};

console.log(sortArrayByParity2([3, 1, 2, 4]));