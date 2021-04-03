"use strict";

function sumAll(num) {
  if (num === 0) return 0;
  return num + sumAll(num - 1);
}

// ------------

let linkedList = {
  start: null,
  length: 0,

  add(n) {
    let obj = {
      value: n,
      next: this.start,
    };

    this.start = obj;
    this.length++;
  },

  remove(n) {
    // let head = this.start;
    // let length = this.length;
    // let newObj={};
    // // let current = head.next;

    // function helper(obj, num) {
    //   if (obj === null) return "No value asuch";
    //   if (obj.value === num) {
    //     obj = obj.next;
    //     length--;

    //   } else helper(obj.next, num);
    // }
    // if (head !== null) helper(head, n);
    // this.length = length;
    // console.log(this);
    // return "No value asuch";

    let obj = this.start.next;

    this.start = obj;
    this.length--;
  },

  print() {
    let arr = [];
    let head = this.start;

    function helper(obj) {
      arr.push(obj.value);
      if (obj.next !== null) helper(obj.next);
    }

    if (head !== null) {
      helper(head);
    }

    let i = 0;
    let popped;
    while (i < arr.length) {
      popped = arr.pop();
      arr.splice(i, 0, popped);
      i++;
    }

    console.log(`LinkedList{${arr.join(",")}}`);
  },
};
console.log(linkedList);
linkedList.add(2);
console.log(linkedList);
linkedList.add(3);
console.log(linkedList);
linkedList.add(2);
console.log(linkedList);
linkedList.add(5);
console.log(linkedList);

// linkedList.add(4);
// linkedList.add(5);
// console.log(linkedList);
// // linkedList.remove();
// // console.log(linkedList);
// // console.log(linkedList);
// linkedList.print();
linkedList.remove(5);
// console.log(linkedList);

linkedList.print();
