"use strict";
// let arr = [2, 3];
// let x = arr.__proto__.__proto__ === Object.prototype;
// console.log(x);

// String.prototype.reverse = function () {
//   let reversed = "";
//   for (let i = this.length - 1; i >= 0; i--) {
//     reversed += this[i];
//   }
//   return reversed;
// };

// let str = "hello";
// let reversed = str.reverse(str);
// console.log(reversed);

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    let display = (student) => console.log(this.title + ": " + student);
    this.students.forEach(display);
  },
};
group.showList();
