var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let index = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      index++;
      nums[index] = nums[i];
    }
    console.log(nums)
  }

  //console.log(nums);

  return index + 1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));