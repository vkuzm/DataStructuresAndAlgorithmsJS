

// Time: O(n) - The first for loop iterate over the array to marks the numbers and the second loop iterate over the array again to builds the result. We have O(N + N) so O(N)
// Space: O(n)
const findDisappearedNumbers = function (nums) {
  const missingNumbers = [];
  const set = new Set();

  for (const num of nums) {
    set.add(num);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));