
console.log(containsDuplicate([1,2,3,1]));

//Time Complexity: O(n)
//Space Complexity: O(n)
function containsDuplicate(nums) {
  if (nums.length < 2) {
    return false;
  }

  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}