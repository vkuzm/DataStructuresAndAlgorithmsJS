
// Time: O(n)
// Space: O(n)
const majorityElement = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const map = new Map();

  for (const num of nums) {
    if (map.has(num) && map.get(num) + 1 > Math.floor(nums.length / 2)) {
      return num;
    } else {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  }
  return -1;
};

console.log(majorityElement([2,2,1,1,1,2,2]));