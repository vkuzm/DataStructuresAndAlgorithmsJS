
// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
// Time: O(n + m)
// Space: O(1)
const minDominoRotations = function (A, B) {
  const top = rotateCount(A, B, A[0]);
  const bottom = rotateCount(A, B, B[0]);

  if (top === -1 && bottom === -1) {
    return -1;
  }

  if (top === -1) {
    return bottom;
  }

  if (bottom === -1) {
    return top;
  }

  return Math.min(top, bottom);
};

function rotateCount(A, B, target) {
  let top = 0;
  let bottom = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== target && B[i] !== target) {
      return -1;
    }

    if (A[i] !== target) {
      top++;
    }

    if (B[i] !== target) {
      bottom++;
    }
  }
  return Math.min(top, bottom);
}

console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]));