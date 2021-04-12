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
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;
    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
