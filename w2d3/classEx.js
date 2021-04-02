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

// let linkedList = {
//   head: null,

//   add(n) {
//     let obj = {
//       value: n,
//       next: this.head,
//     };
//     this.head = obj;
//   },
// };
// console.log(linkedList);
// linkedList.add(2);
// console.log(linkedList);
// linkedList.add(3);
// console.log(linkedList);

// console.log(linkedList);

let ll = {
  head: null,
  length: 0,

  add(n) {
    let obj = {
      value: n,
      next: this.head,
    };
    this.head = obj;
    this.length++;
  },
  remove() {
    this.head = this.head.next;
    this.length--;
  },

  print() {
    let arr = [];

    function helper(obj) {
      arr.push(obj.value);
      if (obj.next !== null) {
        helper(obj.next);
      }
    }

    if (this.head !== null) {
      helper(this.head);
    }
    let i = 0;
    while (i < arr.length) {
      let popped = arr.pop();
      arr.splice(i, 0, popped);
      i++;
    }
    let set = new Set(arr);
    console.log(set);
  },
};
console.log(ll);
ll.add(3);
console.log(ll);
ll.add(4);
console.log(ll);
ll.add(5);
console.log(ll);
ll.remove();
ll.remove();
// ll.remove();
// console.log(ll);
// ll.remove();
// console.log(ll);
// ll.remove();
// console.log(ll);
ll.print();
