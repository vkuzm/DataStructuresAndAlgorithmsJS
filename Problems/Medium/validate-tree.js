
// https://leetcode.com/problems/validate-binary-search-tree/
// Time: O(n)
// Space: O(n)
const isValidBST = function(root) {
  return isValid(root, null, null);
};

function isValid(node, min, max) {
  if (node === null) {
    return true;
  }

  const val = node.val;
  
  if (min != null && min >= val) {
    return false;
  }

  if (max != null && max <= val) {
    return false;
  }

  return isValidBST(node.left, min, val)
      && isValidBST(node.right, val, max);
}

console.log(isValidBST([5,1,4,null,null,3,6]));

