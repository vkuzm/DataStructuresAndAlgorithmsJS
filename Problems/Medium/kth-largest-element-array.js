
// Time: O(n log n)
// Space: O(1)
const findKthLargest = function (nums, k) {
  nums.sort();
  return nums[nums.length - k];
};

console.log(findKthLargest([3,2,1,5,6,4], 2));