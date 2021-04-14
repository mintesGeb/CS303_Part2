"use strict";
// class Clock {
//   constructor({ template }) {}

//   render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);
//     console.log(output);
//   }
//   stop() {
//     clearInterval(timer);
//   }
//   start() {
//     render();
//     this.timer = setInterval(render, 1000);
//   }
// }
// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// ----------------

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);
//     console.log(output);
//   }
//   stop() {
//     setTimeout(() => clearInterval(this.timer), 10000);
//     // clearInterval(timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//     this.stop();
//   }
// }
// let clock = new Clock({ template: "h:m:s" });
// clock.start();
// ----------

class Student {
  constructor(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  }
  inputNewGrade(newGrade) {
    this.grades.push(newGrade);
  }
  computeAverageGrade() {
    return this.grades.reduce(
      (aveSum, item, index, arr) => aveSum + item / arr.length,
      0
    );
  }
}

let mintes = new Student("Mintes", "Gebre", [70, 50, 90]);
let robbie = new Student("Robbie", "Benti");
let jossy = new Student("Jossy", "Tekle", [80, 85, 90]);
robbie.inputNewGrade(85);
robbie.inputNewGrade(95);
robbie.inputNewGrade(90);
let robbieAve = robbie.computeAverageGrade();
let array = [mintes, robbie, jossy];

let arrOfAve = array.map((item) => item.computeAverageGrade());
console.log(arrOfAve);
