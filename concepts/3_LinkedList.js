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

class LinkedList {
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

  prepend(data) {
    const newNode = {
      value: data,
      next: null,
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const myLinkedList = new LinkedList(10);
// console.dir(myLinkedList, {depth: null});
myLinkedList.prepend(5);
myLinkedList.append(15);
myLinkedList.prepend(55);
myLinkedList.append(35);
console.dir(myLinkedList, {depth: null});