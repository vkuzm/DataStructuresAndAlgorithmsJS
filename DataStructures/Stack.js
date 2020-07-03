class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const currentNode = this.top;
    this.top = this.top.next;
    this.length--;
    return currentNode.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  printList() {
    const array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack.printList());

console.log("peek:", myStack.peek());
console.log("pop:", myStack.pop());
console.log("pop:", myStack.pop());
console.log(myStack.printList());
