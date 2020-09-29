
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const Node = require('./Node');

const node = new Node(1);
node.insert(2);
node.insert(3);

console.log(maxDepth(node));