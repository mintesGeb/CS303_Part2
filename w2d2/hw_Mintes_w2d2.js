"use strict";

let arr = [1, 50, 40, 3, 10];

// let sumAbove20 = arr
//   .filter((item) => item > 20)
//   .reduce((sum, item) => sum + item);
let sumAbove20 = arr
  .filter((item) => item > 20)
  .reduce((sum, item) => sum + item, 0);
// console.log(sumAbove20);
//========================================

let strArr = ["mintes", "halle", "amen", "amani", "robbie", "alephat"];

// let newStrArr = strArr.filter((item) => item.length >= 5 && item.includes("a"));

let newStrArr = strArr.filter((item) => item.length >= 5 && item.includes("a"));
// console.log(newStrArr);

//========================================

function Employee(firstName, lastName, birthdate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthdate = birthdate;

  this.getFullName = function () {
    return this.firstName + this.lastName;
  };

  this.getAge = function () {
    return new Date().getFullYear() - new Date(this.birthdate).getFullYear();
  };
}

let josh = new Employee("Josh", "Gebre", "1985-08-12");
let mintes = new Employee("Mintes", "Gebre", "1991-08-28");
let robbie = new Employee("Robbie", "Benti", "2005-02-13");
let alephat = new Employee("Alephat", "Benti", "2010");

let employee = [josh, mintes, robbie, alephat];

let lessThan20 = employee.filter((item) => item.getAge() < 20);

let youngEmployee = employee
  .filter((item) => new Date(item.birthdate).getFullYear() > 2000)
  .map((item) => item.getFullName());

//========================================

// let map = new Map();
// map.set("Question", "What is the best programming language? ");
// map.set("1", "Java");
// map.set("2", "c");
// map.set("3", "JS");
// map.set("correct", "3");
// let answer = prompt(map.get("Question"));

// console.log(map);
const students = [
  { name: "Quincy", grade: 96, courses: ["cs301", "cs303"] },
  { name: "Jason", grade: 84, courses: ["cs201", "cs203"] },
  { name: "Alexis", grade: 100, courses: ["cs105", "cs211"] },
  { name: "Sam", grade: 65, courses: ["cs445", "cs303"] },
  { name: "Katie", grade: 90, courses: ["cs303", "cs477"] },
];

let i = students
  .filter((item) => item.courses.includes("cs303"))
  .reduce((sum, item, index, arr) => sum + item.grade / arr.length, 0);
// console.log(i);

let arr123 = [1, 2, 3];

// function pow(x, b) {
//   if (b === 1) return x;
//   return x * pow(x, b - 1);
// }

function printReverse(str) {
  // -----opt1-----

  if (str.length <= 1) return str;

  return str.substr(-1) + printReverse(str.substr(0, str.length - 1));

  // ---------opt2------

  // let string = "";
  // let i = str.length - 1;
  // while (i >= 0) {
  //   string += str[i];
  //   i--;
  // }
  // return string;

  // -----opt3-----
  // let i = 0;
  // let string = [...str];
  // while (i < string.length) {
  //   let popped = string.pop();
  //   string.splice(i, 0, popped);
  //   i++;
  // }
  // return string.join("");
}
// console.log(printReverse("abc"));

// let x = "were";
// console.log(x);
// let y = x.substr(0, 2);
// console.log(y);

// let result = printReverse("abc");
// console.log(result);

// let linkedList = { value: 1 };
// linkedList.next = { value: 2 };
// linkedList.next.next = { value: 4 };
// linkedList.next.next.next = { value: 5 };
// console.log(linkedList);

// let newItem = { value: "New Item" };
// newItem.next = linkedList;
// console.log(newItem);

// let secondList = linkedList.next;
// newItem.next = null;
// newItem.next = secondList;
// console.log(newItem);
