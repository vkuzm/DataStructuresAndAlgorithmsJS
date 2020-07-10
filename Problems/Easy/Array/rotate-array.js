
// Solution #1
// Time complexity: O(n * m)
// Space complexity: O(1)
function rotate1(nums, k) {
  for (let i = 0; i < k; i++) {
    let previous = nums[nums.length - 1];

    for (let j = 0; j < nums.length; j++) {
      const temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
  console.log(nums);
}
rotate1([1, 2, 3, 4, 5, 6, 7], 3);

// Solution #2
// Time complexity: O(n + m)
// Space complexity: O(n)
function rotate2(nums, k) {
  const a = [];

  for (let i = 0; i < nums.length; i++) {
    a[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = a[i];
  }
  console.log(nums);
}
rotate2([1, 2, 3, 4, 5, 6, 7], 3);

