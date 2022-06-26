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
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
console.dir(myLinkedList, {depth: null});

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
}
console.dir(obj, {depth: null});
