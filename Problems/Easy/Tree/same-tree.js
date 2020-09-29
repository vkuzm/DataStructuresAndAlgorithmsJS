
// Time: O(n)
// Space: O(1)
const isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.data !== q.data) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};



// Time: O(n)
// Space: O(n)
const isSameTreeIterative = function (p, q) {
  const queue1 = [];
  const queue2 = [];
  queue1.push(p);
  queue2.push(q);

  while (queue1.length) {
    p = queue1.shift();
    q = queue2.shift();

    if (!check(p, q)) return false;

    if (p !== null) {
      if (!check(p.left, q.left)) return false;
      if (p.left !== null) {
        queue1.push(p.left);
        queue2.push(q.left);
      }

      if (!check(p.right, q.right)) return false;
      if (p.right !== null) {
        queue1.push(p.right);
        queue2.push(q.right);
      }
    }
  }

  return true;
};
function check(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.data !== q.data) {
    return false;
  }
  return true;
}

const Node = require('./Node');

const node1 = new Node(1);
node1.insert(2);
node1.insert(3);

const node2 = new Node(5);
node2.insert(2);
node2.insert(3);

console.log(isSameTree(node1, node2));
console.log(isSameTreeIterative(node1, node2));