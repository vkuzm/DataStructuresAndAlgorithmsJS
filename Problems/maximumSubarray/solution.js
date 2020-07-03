
console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]));

// Time complexity: O(n^2)
// Space complexity: O(1)
function maxSubArray1(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (max < sum) {
        max = sum;
      }
    }
  }
  return max;
}

// Time complexity: O(n)
// Space complexity: O(1)
function maxSubArray2(nums) {
  let max = nums[0];
  let sum = 0;

  for (let num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    max = Math.max(sum, max);
  }
  return max;
}