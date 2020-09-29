// Time: O(n)
// Space: O(n)
const levelOrder = function (root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const size = queue.length;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      currentLevel.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
};