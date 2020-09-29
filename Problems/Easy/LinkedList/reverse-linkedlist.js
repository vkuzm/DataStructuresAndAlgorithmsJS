class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
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

  // Time: O(n)
  // Space: O(1)
  reverse() {
    const head = this.head;
    if (head === null) return null;

    let prev = null;
    let curr = head;

    while(curr !== null) {
      const nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    return prev;
  }

  // Time: O(n)
  // Space: O(1)
  reverse2() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
console.log(myLinkedList.printList());

myLinkedList.reverse();
//myLinkedList.reverse2();
console.log(myLinkedList.printList());