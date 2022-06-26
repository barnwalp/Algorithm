// const basket = ['appla', 'banana', 'mango', 'orange'];

// linked list:
// 'apple'
//   9406  --> 'banana'
//               9538  -->  'mango' 
//                           2345  -->  'orange'
//                                       5463  --> null

// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  // Time Complexity: O(1)
  append(data) {
    const newNode = {
      value: data,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  // Time Complexity: O(1)
  prepend(data) {
    const newNode = {
      value: data,
      next: null,
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Time Complexity: O(n)
  insert(index, data) {
    const newNode = {
      value: data,
      next: null
    }
    let curNode = this.head;
    let count = 1;
    while (count != index) {
      curNode = curNode.next;
      count++;
    } 
    newNode.next = curNode.next;
    curNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      return removedNode.value;
    }
    let curNode = this.head;
    let count = 1;
    while(count != index) {
      curNode = curNode.next;
      count++;
    }
    const removedNode = curNode.next;
    curNode.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode.value;
  }

  reverseList() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second.next) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head = second;
    this.head.next = first;
    this.tail.next = null;
    return this.head;
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
myLinkedList.prepend(55);
myLinkedList.append(35);
myLinkedList.insert(2, 95);
myLinkedList.insert(3, 85);
myLinkedList.insert(1, 75);
myLinkedList.remove(0);
myLinkedList.remove(5);

// console.dir(myLinkedList, {depth: null});
myLinkedList.printList();
myLinkedList.reverseList();
console.log('after reversing');
myLinkedList.printList();