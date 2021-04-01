"use strict";

function sumAll(num) {
  if (num === 0) return 0;
  return num + sumAll(num - 1);
}
// console.log(sumAll(5));

// let linkedList = {
//   add(item) {
//     if (this.item) {
//       if (this.next) {
//         this.next.add(item);
//       } else {
//         this.next = item;
//       }
//     } else {
//       this.item = item;
//     }
//     return this;
//   },
//   remove(item) {
//     this.item = null;
//     return this;
//   },
//   print() {
//     let linkedListSet = new Set();
//     let x = this.next;
//     if (x === null) return;
//     linkedListSet.add(x);
//     x = this.next.next;
//     print;
//     return linkedListSet;
//   },
// };
// linkedList.add(1);
// console.log(linkedList);
// linkedList.add(2);
// console.log(linkedList);
// linkedList.add(3);
// console.log(linkedList);

// linkedList = {
//   add(n) {
//     if (!this.value) this.value = n;
//     else {
//       if (!this.next) {
//         this.next = {};

//         this.next.value = n;
//       } else {
//         let next = this.next;
//         next(this.add(n));
//       }
//     }
//     return this;
//   },
// };
// console.log(linkedList);

// let linkedList = {
//   add(element) {
//     // creates a new node
//     var node = new Node(element);

//     // to store current node
//     var current;

//     // if list is Empty add the
//     // element and make it head
//     if (this.head == null) this.head = node;
//     else {
//       current = this.head;

//       // iterate to the end of the
//       // list
//       while (current.next) {
//         current = current.next;
//       }

//       // add node
//       current.next = node;
//     }
//     this.size++;
//   },
// };
// console.log(linkedList);
// linkedList.add(1);
// console.log(linkedList);

// let object = {};

// function add(n, obj) {
//   if (obj.value) {
//     return add(n, obj.next);
//   } else {
//     obj.value = n;
//     obj.next = {};
//   }
//   return object;
// }
// console.log(add(3, object));
// console.log(add(5, object));
// console.log(add(6, object));

// console.log(object);

// let linkedList = {
//   add(n) {
//     if (this.value) {
//       let next = this.next;
//       return next.add(n);
//     } else {
//       this.value = n;
//       this.next = {};
//     }

//     return this;
//   },
// };

// console.log(linkedList);

// linkedList.add(1);
// console.log(linkedList);
// linkedList.add(2);

function LinkedList() {
  this.head = null;
  this.length = 0;

  this.add = function (n) {
    const newNode = new LinkedListNode(n, this.head);
    this.head = newNode;
    this.length++;
  };
}

function LinkedListNode(value, next) {
  this.value = value;
  this.next = next;
}

let ll = new LinkedList();
// console.log(ll);
ll.add(2);
console.log(ll);
ll.add(3);
console.log(ll);
