"use strict";

// const timerId = setInterval(() => console.log(new Date()), 1000);

// setTimeout(() => clearTimeout(timerId), 5000);

// function printNumbers(from, to) {
//   let n = from++;
//   return setInterval(console.log(n), 1000);
// }
// printNumbers(1, 10);
// setInterval(() => printNumbers(1, 10), 1000);
// ========
// let x = [5, 1, 2, 3];
// let i = 0;

// function addOne() {
//   console.log(x[i]);
//   i++;
// }
// let timeID = setInterval(addOne, 1000);
// setTimeout(() => clearTimeout(timeID), 5000);
// ====================
// let x = [5, 1, 2, 3];
// let i = 0;

// 1.

let i = 0;
function addOne(from, to) {
  let arr = [];
  while (from <= to) {
    arr.push(from);
    from++;
  }
  console.log(arr[i]);
  i++;
}

let timeID = setInterval(() => addOne(1, 10), 1000);
setTimeout(() => clearTimeout(timeID), 11000);

// 2. In the begining of the loop

// let i = 0;

// setTimeout(() => console.log(i), 1);

// for (let j = 0; j < 1000000000; j++) {
//   i++;
// }
// --------
