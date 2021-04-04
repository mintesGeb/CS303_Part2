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

// ----Option 1----------

// let i = 0;
// function addOne(from, to) {
//   let arr = [];
//   while (from <= to) {
//     arr.push(from);
//     from++;
//   }
//   console.log(arr[i]);
//   i++;
// }

// let timeID = setInterval(() => addOne(1, 10), 1000);
// setTimeout(() => clearTimeout(timeID), 11000);

// ----Option 2----------

function printNumbers(from, to) {
  let timeID = setInterval(() => console.log(from++), 1000);
  setTimeout(() => clearTimeout(timeID), (to + 1) * 1000);
}
printNumbers(1, 10);

// 2. after the loop

// The alert is going to show the last number (increament of i) which is the limit j goes upto
// --------
