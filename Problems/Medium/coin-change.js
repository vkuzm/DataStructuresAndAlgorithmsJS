

// Time: O(n * m) = n - amount, m - coins
// Space: O(n)
const coinChange = function (coins, amount) {
  const dp = [];

  for (let i = 0; i <= amount; i++) {
    dp.push(amount + 1);
  }

  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1,2,5], 11));