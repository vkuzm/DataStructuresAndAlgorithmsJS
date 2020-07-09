class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Time Complexity: O(n)
  // Space Complexity: O(height of tree)
  DFSInOrder() {
    return this.traverseInOrder(this.root, []);
  }

  DFSPostOrder() {
    return this.traversePostOrder(this.root, []);
  }

  DFSPreOrder() {
    return this.traversePreOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    //console.log(node.value);

    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    list.push(node.value);

    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    return list;
  }

  traversePostOrder(node, list) {
    //console.log(node.value);

    if (node.left) {
      this.traversePostOrder(node.left, list);
    }
    if (node.right) {
      this.traversePostOrder(node.right, list);
    }
    list.push(node.value);

    return list;
  }

  traversePreOrder(node, list) {
    //console.log(node.value);
    list.push(node.value);

    if (node.left) {
      this.traversePreOrder(node.left, list);
    }
    if (node.right) {
      this.traversePreOrder(node.right, list);
    }
    return list;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

//       9
//   4      20
// 1  6   15  170

console.log('inOrder', tree.DFSInOrder());
console.log('postOrder', tree.DFSPostOrder());
console.log('preOrder', tree.DFSPreOrder());