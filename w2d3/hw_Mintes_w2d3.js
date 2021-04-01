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
  // remove() {},
};

console.log(linkedList);
linkedList.add(2);
console.log(linkedList);
linkedList.add(3);
console.log(linkedList);
