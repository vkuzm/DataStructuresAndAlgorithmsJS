
//======================================
// Solution #1
// Time Complexity: O(n)
// Space Complexity: O(1)
var rob = function(nums) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      a = Math.max(a + nums[i], b);
    } else {
      b = Math.max(b + nums[i], a);
    }
  }

  return Math.max(a, b);
};

console.log(rob([2, 1, 1, 2]));


//======================================
// Solution #2
// Time Complexity: O(n)
// Space Complexity: O(n)
var robDP = function(nums) {
  if (nums.length === 0) return 0;

  const dp = [];
  dp.push(0);
  dp.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    const max = Math.max(dp[i], dp[i - 1] + nums[i]);
    dp.push(max);
  }

  console.log(dp)

  return dp[nums.length];
};

console.log(robDP([2, 1, 1, 2]));