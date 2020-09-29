
// Solution: #1
// Time: O(n)
// Space: O(1)
const maxArea = function (height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    const distance = j - i;
    const minHeight = Math.min(height[i], height[j]);
    const result = distance * minHeight;
    maxArea = Math.max(maxArea, result);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));


// Solution: #2
// Time: O(n^2)
// Space: O(1)
const maxArea2 = function (height) {
  let maxArea = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const minArea = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, minArea);
    }
  }
  return maxArea;
};

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));