class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  // Time Complexity: O(1)
  append(data) {
    const newNode = {
      value: data,
      next: null,
      prev: null,
    };
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  // Time Complexity: O(1)
  prepend(data) {
    const newNode = {
      value: data,
      next: null,
      prev: null
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  // Time Complexity: O(n)
  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
      prev: null
    }
    let curNode = this.head;
    let count = 1;
    while (count != index) {
      curNode = curNode.next;
      count++;
    } 
    newNode.next = curNode.next;
    newNode.prev = curNode;
    curNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return removedNode.value;
    }
    if (index === this.length-1) {
      const removedValue = this.tail.value;
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail.prev = null;
      this.tail = newTail;
      return removedValue;
    }
    let curNode = this.head;
    let count = 1;
    while(count != index) {
      curNode = curNode.next;
      count++;
    }
    const removedNode = curNode.next;
    removedNode.next.prev = curNode;
    curNode.next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode.value;
  }

  // Time Complexity: O(n)
  printList() {
    const arr = [];
    let curNode = this.head;
    while (curNode !== null) {
      arr.push(curNode.value);
      curNode = curNode.next;
    }
    console.log(arr);
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(5);
myLinkedList.append(15);
// myLinkedList.prepend(55);
myLinkedList.append(35);
myLinkedList.insert(2, 95);
myLinkedList.insert(3, 85);
myLinkedList.insert(1, 75);
myLinkedList.remove(0);
myLinkedList.remove(2);
myLinkedList.remove(4);

// console.dir(myLinkedList, {depth: null});
myLinkedList.printList();