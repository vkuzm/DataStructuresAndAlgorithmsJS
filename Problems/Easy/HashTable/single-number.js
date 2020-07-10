
// Time Complexity: O(n)
// Space Complexity: O(n)
function singleNumber(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return set.size > 0 ? set.values().next().value : 0;
}

console.log(singleNumber([4,1,2,1,2]));