class MyArray {
  constructor() {
    this.counter = 0;
    this.data = [];
  }

  add(item) {
    this.data[this.counter] = item;
    this.counter++;
  }

  pop() {
    const lastItem = this.data[this.counter - 1];
    delete this.data[this.counter - 1];
    this.counter--;
    return lastItem;
  }

  remove(index) {
    this.shiftItems(index);
    this.counter--;
  }

  get(index) {
    return this.data[index];
  }

  size() {
    return this.counter;
  }

  length() {
    return this.size();
  }

  shiftItems(index) {
    for (let i = index; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const letters = new MyArray();
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('d');
console.log(letters.size());
console.log(letters.get(3));
console.log(letters.remove(0));
console.log(letters.size());
console.log(letters.pop());
console.log(letters.size());