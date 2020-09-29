

// Time: O(n)
// Space: O(n)
const countPrimes = function(n) {
  const primes = [];
  for (let i = 0; i < n; i++) {
    primes.push(true);
  }

  for (let i = 2; (i * i) < n; i++) {
    if (primes[i]) {
      for (let j = i; i*j < n; j++) {
        primes[i*j] = false;
      }
    }
  }

  let counter = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      counter++;
    }
  }
  return counter;
};

console.log(countPrimes(10));