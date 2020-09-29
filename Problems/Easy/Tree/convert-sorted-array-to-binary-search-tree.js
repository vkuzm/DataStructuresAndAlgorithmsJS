const Node = require('./Node');

// Time: O(log n)
// Space: O(1)
const sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  return constructTree(nums, 0, nums.length - 1);
};

function constructTree(nums, left, right) {
  if (left > right) return null;

  const mid = Math.floor(left + (right-left) / 2);
  const node = new Node(nums[mid]);
  node.left = constructTree(nums, left, mid - 1);
  node.right = constructTree(nums, mid + 1, right);

  return node;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]));