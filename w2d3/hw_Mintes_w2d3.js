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
  remove() {
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
    let set = new Set(arr);
    console.log(set);
    return set;

    // if (this.start.value) arr.push(this.start.value);
    // if (start)
    // console.log(arr);
  },
};

linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
console.log(linkedList);
// linkedList.remove();
// console.log(linkedList);
// console.log(linkedList);
linkedList.print();
linkedList.remove();
linkedList.print();
