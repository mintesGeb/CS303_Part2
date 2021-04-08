"use strict";

// ====Object Literal way ====

// let student = {
//   firstName: "default",
//   lastName: "default",
//   grades: [90, 80, 70],
//   inputNewGrade: function (newGrade) {
//     this.grades.push(newGrade);
//   },
//   computeAverageGrade: function () {
//     let average = this.grades.reduce(
//       (sum, item, index, arr) => sum + item / arr.length,
//       0
//     );
//     return average;
//   },
// };

// let mintes = Object.create(student);
// mintes.firstName = "Mintes";
// mintes.lastName = "Gebre";
// mintes.grades = [70, 80, 90];

// let robbie = Object.create(student);
// robbie.firstName = "Rehoboth";
// robbie.lastName = "Benti";
// robbie.grades = [76, 86, 93];

// let jossy = Object.create(student);
// jossy.firstName = "Eyosias";
// jossy.lastName = "Tekle";
// jossy.grades = [79, 80, 99];

// let arr = [mintes, robbie, jossy];

// let averages = arr.map((item) => item.computeAverageGrade());
// console.log(averages);

// =========== Constructor function way =============

function Student(firstName, lastName, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
  return this.grades;
};
Student.prototype.computeAverageGrade = function () {
  let average = this.grades.reduce(
    (sum, item, index, arr) => sum + item / arr.length,
    0
  );
  return average;
};

let mintes = new Student("Mintes", "Gebre", [70, 80, 90]);
let robbie = new Student("Rehoboth", "Benti", [76, 86, 93]);
let jossy = new Student("Eyosias", "Tekle", [79, 80, 99]);
let arr = [mintes, robbie, jossy];

let averages = arr.map((item) => item.computeAverageGrade());
console.log(averages);

Student.prototype.sort = () => sort();