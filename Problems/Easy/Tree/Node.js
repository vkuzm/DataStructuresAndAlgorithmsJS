class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }

    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  contains(value) {
    if (value === this.data) {
      return this;
    }

    if (value < this.data && this.left) {
      return this.left.contains(value);

    } else if (value > this.data && this.right) {
      return this.right.contains(value);
    }

    return null;
  }
}

module.exports = Node;