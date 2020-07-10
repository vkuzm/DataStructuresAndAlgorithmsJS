console.log(moveZeroes([0, 1, 0, 3, 12]));

// Time Complexity = O(n)
// Space Complexity = O(1)
function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}