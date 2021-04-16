"use strict";

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.speed = 0;
//   }
//   run(x) {
//     this.speed = x;
//     console.log(`${this.name} is running with speed of ${this.speed}`);
//   }

//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stopped`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, speed, earLength) {
//     super(name, speed);

//     this.earLength = earLength;
//   }
//   hide() {
//     console.log(`${this.name} hides`);
//   }
//   stop() {
//     super.stop();
//     this.hide();
//   }
// }

// let rabbit1 = new Rabbit("white rabbit", 5, 20);

// console.log(rabbit1);

// rabbit1.hide();
// rabbit1.run(5);
// rabbit1.stop();

// class Article {
//   constructor(name, date) {
//     this.name = name;
//     this.date = date;
//   }
//   static compare(artA, artB) {
//     return artA.date - artB.date;
//   }
// }
// let arr = [
//   new Article("html", new Date(2019, 10, 20)),
//   new Article("zss", new Date(2019, 1, 20)),
//   new Article("js", new Date(2019, 8, 20)),
// ];
// let sorted = arr.sort(Article.compare);
// console.log(sorted);

// class Animal {
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }
//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} runs at ${this.speed}`);
//   }
//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides`);
//   }
// }
// let rabbits = [new Rabbit("white Rabbit", 10), new Rabbit("black rabbit", 5)];
// let sorted = rabbits.sort(Rabbit.compare);
// console.log(sorted);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     console.log("hi " + this._name);
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("too short");
//     } else {
//       this._name = value;
//     }
//   }
// }

// let rabbit = new Animal("white rabbit");

// // console.log(rabbit);
// // rabbit.name;
// rabbit.name = "asfasdf";
// rabbit.name;

// class User {
//   constructor(name) {
//     this._name = name;
//   }
//   set name(value) {
//     this._name = value;
//   }
//   get name() {
//     return this._name;
//   }
// }
// let user1 = new User("John");
// user1.name = "Belihu";
// console.log(user1._name);

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }
//   render() {
//     console.log(this.template);
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
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   constructor({ template }, precision = 1000) {
//     super({ template });
//     this.precision = precision;
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }
// let clock = new ExtendedClock({ template: "h:m:s" }, 5000);
// clock.start();

// class ExtendedClock extends Clock {
//   constructor({ template }, precision = 1000) {
//     super({ template });
//     this.precision = precision;
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// let newClock = new ExtendedClock({ template: "h:m:s" }, 5000);
// newClock.start();

// class HybridCar {
//   constructor(brand, year, price, taxRate) {
//     this.brand = brand;
//     this.year = year;
//     this.price = price;
//     this.taxRate = taxRate;
//   }
//   getTotalPrice() {
//     return this.price * (1 + this.taxRate);
//   }
// }

// class ElectricCar {
//   constructor(brand, year, price, eCarTaxRate) {
//     this.brand = brand;
//     this.year = year;
//     this.eCarTaxRate = eCarTaxRate;
//     this.price = price;
//   }
//   computePrice() {
//     return this.price * (1 + this.eCarTaxRate);
//   }
// }

// class HeroCar {
//   constructor(brand, year, price, HeroTaxRate) {
//     this.brand = brand;
//     this.year = year;
//     this.HeroTaxRate = HeroTaxRate;
//     this.price = price;
//   }
//   grabPrice() {
//     return this.price * (1 + this.HeroTaxRate);
//   }
// }

// const cars = [
//   new HybridCar("Honda", 2020, 10000, 0.1),
//   new HybridCar("BMW", 2021, 50000, 0.1),
//   new ElectricCar("Lexus", 2020, 20000, 0.05),
//   new ElectricCar("Tesla", 2021, 30000, 0.05),
//   new HeroCar("Dea", 2021, 40000, 0.005),
//   new HeroCar("Marla", 2021, 40000, 0.005),
// ];

// function computeTotalPrice(car) {
//   return cars.reduce((sum, car) => {
//     if (car instanceof ElectricCar) {
//       sum += car.computePrice();
//     } else if (car instanceof HybridCar) {
//       sum += car.getTotalPrice();
//     } else if (car instanceof HeroCar) {
//       sum += car.grabPrice();
//     }
//     return sum;
//   }, 0);
// }

// console.log(computeTotalPrice(cars));

// class Car {
//   constructor(brand, year, price) {
//     this.brand = brand;
//     this.year = year;
//     this.price = price;
//   }
//   computePrice() {
//     //commonAPI - interface
//     return this.price;
//   }
// }

// class HybridCar extends Car {
//   constructor(brand, year, price, HybridCartaxRate) {
//     super(brand, year, price);
//     this.taxRate = HybridCartaxRate;
//   }
//   computePrice() {
//     return this.price * (1 + this.taxRate);
//   }
// }

// class ElectricCar extends Car {
//   constructor(brand, year, price, eCarTaxRate) {
//     super(brand, year, price);
//     this.eCarTaxRate = eCarTaxRate;
//   }
//   computePrice() {
//     return this.price * (1 + this.eCarTaxRate);
//   }
// }

// class HeroCar extends Car {
//   constructor(brand, year, price, heroTaxRate) {
//     super(brand, year, price);
//     this.heroTaxRate = heroTaxRate;
//   }
//   computePrice() {
//     return this.price * (1 + this.heroTaxRate);
//   }
// }

// const cars = [
//   new HybridCar("Honda", 2020, 10000, 0.1),
//   new HybridCar("BMW", 2021, 50000, 0.1),
//   new ElectricCar("Lexus", 2020, 20000, 0.05),
//   new ElectricCar("Tesla", 2021, 30000, 0.05),
//   new HeroCar("Dea", 2021, 40000, 0.005),
//   new HeroCar("Marla", 2021, 40000, 0.005),
// ];

// function computeTotalPrice(car) {
//   return car.reduce((sum, car) => sum + car.computePrice(), 0);
// }
// console.log(computeTotalPrice(cars));

// -------//------------------

// class Shape {
//   area() {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   constructor(r) {
//     super();
//     this.radius = r;
//   }
//   area() {
//     return Math.PI * this.radius ** 2;
//   }
//   toString() {
//     return this.getPrototypeOf.constructor.name;
//   }
// }

// class Rectangle extends Shape {
//   constructor(w, h) {
//     super();
//     this.width = w;
//     this.height = h;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }

// class Triangle extends Shape {
//   constructor(b, h) {
//     super();
//     this.base = b;
//     this.height = h;
//   }
//   area() {
//     return this.base * (this.height) / 2;
//   }
// }

// function cumilativeFun(x) {
//   return x.reduce((sum, shape) => {
//     if (shape instanceof Shape) {
//       return sum + shape.area();
//     } else {
//       throw Error("bad argument");
//     }
//   }, 0);
// }
// let arrShapes=[new Circle(2), new Rectangle (3,6), new Triangle(3,7)]
// console.log(cumilativeFun(arrShapes));
// function cumulativeFunction(shapes) {
//   return shapes.reduce((sum, shape) => {
//     if (shape instanceof Shape) {
//
//       return sum + shape.area();
//     } else {
//       throw Error("Bad Argument");
//     }
//   }, 0);
// }
// let arrShapes = [
//   new Circle(2),
//   new Circle(3),
//   new Rectangle(2, 4),
//   new Rectangle(3, 5),
//   new Triangle(4, 2),
// ];
// console.log(cumulativeFunction(arrShapes));

// -------//------------------

// class Account {
//   constructor(accID, balance) {
//     this.accID = accID;
//     this.balance = balance;
//   }
//   computeUpdatedBalance() {
//     return this.balance;
//   }
// }

// class SavingsAccount extends Account {
//   constructor(accID, balance, intRate) {
//     super(accID, balance);
//     this.intRate = intRate;
//   }
//   computeUpdatedBalance() {
//     return this.balance + this.intRate * this.balance;
//   }
// }

// class CheckingAccount extends Account {
//   constructor(accID, balance, monFee) {
//     super(accID, balance);
//     this.monFee = monFee;
//   }
//   computeUpdatedBalance() {
//     return this.balance - this.monFee;
//   }
// }

// class Employee {
//   constructor(name, accounts = []) {
//     this.name = name;
//     this.accounts = accounts;
//   }
//   addAccount(account) {
//     this.accounts.push(account);
//   }
//   computeUpdatedBalanceSum() {
//     return this.accounts.reduce((sum, account) => {
//       return sum + account.computeUpdatedBalance();
//     }, 0);
//   }
// }

// const emp = new Employee("Tina");

// emp.addAccount(new CheckingAccount(1001, 5000.0, 25));

// emp.addAccount(new CheckingAccount(1002, 2000.0, 25));

// emp.addAccount(new SavingsAccount(8001, 30000.0, 0.02));

// emp.addAccount(new SavingsAccount(8002, 50000.0, 0.04));

// console.log(new SavingsAccount(8002, 50000.0, 0.04).computeUpdatedBalance());

// console.log(emp.computeUpdatedBalanceSum()); //Expected Result: 89550

// function Student(stuID, answers = []) {
//   this.stuID = stuID;
//   this.answers = answers;
// }
// Student.prototype.addAnswer = function (qID, stuAnswer) {
//   this.answers.push({ qID, stuAnswer });
// };

// function Question(qID, corAnswer) {
//   this.qID = qID;
//   this.corAnswer = corAnswer;
// }
// Question.prototype.checkAnswer = function (student) {
//   let map = new Map(Object.entries(student));

//   if (map.get(String(this.qID)) == this.corAnswer) return "Correct";
//   else return "Incorrect";
// };

// function Quiz(questions, students) {
//   this.questions = new Map();
//   questions.forEach((q) => this.questions.set(qID, corAnswer));
//   this.students = students;
// }
// Quiz.prototype.scoreStudentBySid = function (stuID) {
//   // count how many correct answers for each stu
//   let found = this.students.find((item) => item.stuID === stuID);
//   found.answers.reduce(
//     sum,
//     (currentQuestion) => {
//       if (currentQuestion.checkAnswer(this.question.get(currentQuestion.qID))) {
//         sum = sum + 1;
//       }
//       return sum;
//     },
//     0
//   );
// };

// Quiz.prototype.getAverageScore = function () {
//   // average of all students scores
//   return this.student.reduce((sumAve, stu, index, arr) => {
//     return sumAve + this.scoreStudentBySid(stu.stuID) / arr.length;
//   }, 0);
// };

// const student1 = new Student(10);
// student1.addAnswer(new Question(2, "a"));
// student1.addAnswer(new Question(3, "b"));
// student1.addAnswer(new Question(1, "b"));
// const student2 = new Student(11);
// student2.addAnswer(new Question(3, "b"));
// student2.addAnswer(new Question(2, "a"));
// student2.addAnswer(new Question(1, "d"));

// const students = [student1, student2];

// // console.log(students);

// const questions = [
//   new Question(1, "b"),
//   new Question(2, "a"),
//   new Question(3, "b"),
// ];
// // let q2 = new Question(2, "a").checkAnswer({ 2: "a" });
// // console.log(q2);
// const quiz = new Quiz(questions, students);

// let scoreforStudent10 = quiz.scoreStudentBySid(10);

// console.log(scoreforStudent10); //Expected Result: 3

// let scoreforStudent11 = quiz.scoreStudentBySid(11);

// console.log(scoreforStudent11); //Expected Result: 2

// let average = quiz.getAverageScore();

// console.log(average); //Expected Reuslt: 2.5

// class Question {
//   constructor(qID, answer) {
//     this.qID = qID;
//     this.answer = answer;
//   }
//   checkAnswer(answer) {
//     return this.answer === answer;
//   }
// }

// class Student {
//   constructor(stuID, answers = []) {
//     this.stuID = stuID;
//     this.answers = answers;
//   }
//   addAnswer(question) {
//     this.answers.push(question);
//   }
// }

// class Quiz {
//   constructor(questionsArray = [], students = []) {
//     this.questions = new Map();
//     //convert question array to map
//     questions.forEach((question) =>
//       this.questions.set(question.qID, question.corAnswer)
//     );
//     this.students = students;
//   }
//   scoreStudent(stuID) {
//     // to do compute - score based on answer
//     let found = this.students.filter((item) => item.stuID == stuID);
//     found.answers.reduce((sum, currentQuestion) => {
//       let questionID = currentQuestion.qID;
//       let correctAnswer = this.question.get(questionID);
//       let result = currentQuestion.checkAnswer(correctAnswer);
//       if (result) sum += 1;
//       return sum;
//     }, 0);
//   }
//   getAverageScore() {
//     this.students.reduce((aveSum, student, item, arr) => {
//       return aveSum + this.scoreStudent(student.stuID) / arr.length;
//     }, 0);
//   }
// }

// const questions = [
//   new Question(1, "a"),
//   new Question(2, "b"),
//   new Question(3, "d"),
// ];

// let student1 = new Student(1001, [
//   new Question(1, "b"),
//   new Question(2, "b"),
//   new Question(3, "c"),
// ]);
// student1.addAnswer(new Question(1, "b"));
// student1.addAnswer(new Question(2, "b"));
// student1.addAnswer(new Question(3, "c"));

// let student2 = new Student(1002, [
//   new Question(1, "a"),
//   new Question(2, "b"),
//   new Question(3, "d"),
// ]);
// student2.addAnswer(new Question(1, "a"));
// student2.addAnswer(new Question(2, "b"));
// student2.addAnswer(new Question(3, "d"));

// const students = [student1, student2];
// let quizObj = new Quiz(questions, students);

// console.log(quizObj.scoreStudent(1001));

// function checkExam(x, y) {}

// let correctAnswers = [
//   { qID: 1, answer: "a" },
//   { qID: 2, answer: "b" },
//   { qID: 3, answer: "c" },
// ];
// let studentAnswers = [
//   { qID: 1, answer: "b" },
//   { qID: 2, answer: "b" },
//   { qID: 3, answer: "b" },
// ];
// console.log(checkExam(correctAnswers, studentAnswers));
// {2,3,1,5,6,4,5,5,2}
class MySet {
  constructor(obj = {}) {
    let x = obj;
    if (Array.isArray(obj)) {
      x = "{";
      let newObj = {};
      for (let each of obj) {
        if (newObj[each]) newObj[each]++;
        else newObj[each] = 1;
      }
      console.log(newObj);

      for (let element of Object.keys(newObj)) {
        x += element + ",";
      }
      x = x.slice(0, -1) + "}";
    }
    this.obj = x;
  }
  addElement(value) {
    let arr = this.obj.slice(1, -1).split(",");
    let exists = false;
    for (let each of arr) {
      if (value == each) {
        exists = true;
      }
    }
    if (!exists) arr.push(String(value));
    let newStr = "{" + arr.join(",") + "}";
    this.obj = newStr;
    console.log(this);
  }
}

let newSet = new MySet([0, 1, 2, 2, 3, 3, 4, 5]);
newSet.addElement("8");
// console.log(newSet);
