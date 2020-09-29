
// Time: O(n*m)
// Space : O(1)
const flipAndInvertImage = function (A) {
  for (let i = 0; i < A.length; i++) {
    let start = 0;
    let end = A.length - 1;

    while (start < end) {
      const temp = A[i][start];

      A[i][start] = A[i][end];
      A[i][end] = temp;

      start++;
      end--;
    }

    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] === 1) {
        A[i][j] = 0;
      } else {
        A[i][j] = 1;
      }
    }
  }

  return A;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));