const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (map.has(current) && i - map.get(current) <= k) {
      return true;
    } else {
      map.set(current, i);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));