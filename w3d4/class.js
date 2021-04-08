"use strict";
// let animal = {
//   name: "animal",
//   eat: true,
//   walk: function () {
//     console.log(this.name + " walks");
//   },
// };

// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// rabbit.name = "rabbit";

// console.log(rabbit.walk()); //rabbit walks
// console.log(animal.walk()); //animal walks
// let head = { glasses: 1 };
// let table = Object.create(head);
// table.pen = 3;
// let bed = Object.create(table);
// bed.sheet = 1;
// bed.pillow = 2;
// let pockets = Object.create(bed);
// pockets.money = 2000;

// console.log(pockets.pen);
// console.log(bed.glasses);

// 2. same speed i think

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.add = function () {
  let sum = this.num1 + this.num2;
  console.log(sum);
  return sum;
};

Calculator.prototype.subtract = function () {
  let diff = this.num1 - this.num2;
  console.log(diff);
  return diff;
};

Calculator.prototype.multiply = function () {
  let prod = this.num1 * this.num2;
  console.log(prod);
  return prod;
};

Calculator.prototype.divide = function () {
  let quo = this.num1 / this.num2;
  console.log(quo);
  return quo;
};

let obj1 = new Calculator(6, 3);
console.log(obj1);
obj1.add();
obj1.subtract();
obj1.multiply();
obj1.divide();