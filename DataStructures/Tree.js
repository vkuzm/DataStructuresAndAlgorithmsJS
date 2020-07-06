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

    if (!this.root) {
      this.root = newNode;

    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;

        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    while (true) {
      if (currentNode === null) {
        return false;
      }
      if (currentNode.value === value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  remove(value) {
    // implement
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(150);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(15));

//     9
//  4     20
//1  6  15  170
