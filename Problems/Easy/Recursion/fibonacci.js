// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// Time Complexity: O(2^n)
// Space Complexity: O(n)
function fibonacciIterative(n){
  const numbers = [0, 1];

  for (let i = 2; i <= n; i++) {
    numbers[i] = numbers[i-1] + numbers[i-2];
  }
  return numbers[n];
}

console.log(fibonacciIterative(6));


// Time Complexity: O(2^n)
// Space Complexity: O(1)
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(6));