class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);

    } else if (index === this.length - 1) {
      this.append(value);

    } else {
      const newNode = new Node(value);
      const leaderNode = this.traverseToIndex(index - 1);
      const followerNode = leaderNode.next;
      leaderNode.next = newNode;
      newNode.prev = leaderNode;
      newNode.next = followerNode;
      followerNode.prev = newNode;
      this.length++;
    }
  }

  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1);
    const nodeToRemove = leaderNode.next;
    leaderNode.next = nodeToRemove.next;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(3, 7);
console.log(myLinkedList.printList());

myLinkedList.remove(4);
console.log(myLinkedList.printList());
