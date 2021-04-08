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
let head = { glasses: 1 };
let table = Object.create(head);
table.pen = 3;
let bed = Object.create(table);
bed.sheet = 1;
bed.pillow = 2;
let pockets = Object.create(bed);
pockets.money = 2000;

console.log(pockets.pen);
console.log(bed.glasses);

// 2. same speed i think
