// https://leetcode.com/problems/path-sum/
function hasPathSum(root, sum) {
  if (root === null) {
    return false;
  }

  if (root.left === null && root.right === null && sum - root.val === 0) {
    return true;
  }

  return (hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
  );
}
