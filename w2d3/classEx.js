"use strict";

// let linkedList = {
//   value: 5,
//   next: null,
// };
// let x = {
//   value: 3,
//   next: null,
// };

// linkedList.next = x;
// console.log(linkedList);

// -------------To Adapt-------------
// function LinkedList() {
//     this.head = null;
//     this.length = 0;

//     this.add = function (n) {
//       const newNode = new LinkedListNode(n, this.head);
//       this.head = newNode;
//       this.length++;
//     };
//   }

//   function LinkedListNode(value, next) {
//     this.value = value;
//     this.next = next;
//   }

//   let ll = new LinkedList();
//   // console.log(ll);
//   ll.add(2);
//   console.log(ll);
//   ll.add(3);
//   console.log(ll);

let linkedList = {
  head: null,

  add(n) {
    let obj = {
      value: n,
      next: this.head,
    };
    this.head = obj;
  },
};
console.log(linkedList);
linkedList.add(2);
console.log(linkedList);
linkedList.add(3);
console.log(linkedList);

// console.log(linkedList);
