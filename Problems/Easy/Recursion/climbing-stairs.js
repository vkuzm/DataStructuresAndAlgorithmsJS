//======================================
// Solution #1
// Time Complexity: O(n)
// Space Complexity: O(n)
var climbStairsIterative = function(n) {
  if (n < 3) {
    return n;
  }

  const numbers = [1, 2];
  for (let i = 2; i < n; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
  }

  return numbers[numbers.length - 1];
};

console.log(climbStairsIterative(5));


//======================================
// Solution #2
// Time Complexity: O(n)
// Space Complexity: O(1)
var climbStairsIterative2 = function(n) {
  if (n < 3) {
    return n;
  }

  let first = 1;
  let second = 2;

  for (let i = 2; i < n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
};

console.log(climbStairsIterative2(5));


//======================================
// Solution #3
// Time Complexity: O(2^n)
// Space Complexity: O(1)
var climbStairsRecursive = function(n) {
  if (n < 3) {
    return n;
  }

  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
};

console.log(climbStairsRecursive(5));


//======================================
// Solution #4
// Time Complexity: O(n)
// Space Complexity: O(n)
const cache = {};
var climbStairsMemoization = function(n) {
  if (cache[n]) {
    return cache[n];
  }

  if (n < 3) {
    return n;
  }

  const result = climbStairsMemoization(n - 1) + climbStairsMemoization(n - 2);
  cache[n] = result;
  return result;
};

console.log(climbStairsMemoization(5));
