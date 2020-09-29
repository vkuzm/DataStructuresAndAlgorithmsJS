
// SOLUTION #1
// Time: O(log n)
// Space O(1)
const findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    console.log(nums[mid], nums[left])
    console.log(nums[mid], nums[right])
    console.log('')

    if (nums[mid] > nums[mid + 1]) {
      // To left
      right = mid;
    } else {
      // To right
      left = mid + 1;
    }
  }

  return left;
};

console.log(findPeakElement([1,2,1,3,5,6,4]));


// SOLUTION #2
// Time: O(n)
// Space O(1)
const findPeakElement2 = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return nums.length - 1;
};