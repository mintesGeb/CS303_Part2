"use strict";
class Student {
  constructor(name) {
    this.name = name;
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  sayHi() {
    console.log("hi " + this.name);
  }
}

let mintes = new Student("mintes");
// mintes.sayHi();

mintes.name = "mamaRobbie";
console.log(mintes.name);
