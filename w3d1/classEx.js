// let x = "wonde";
// //spread
// let y = [...x];

// console.log(y);

// //rest
// function add(x, y, ...args) {
//   let total = x + y;
//   console.log(args);

//   if (args.length > 0) {
//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//   }

//   console.log(total);
//   return total;
// }
// add(5, 5, 5, 5, 6);

// let arr = [5, 1, 6, 1, 2, 3, 4];

// const [a, , b, ...c] = arr;
// const [d, e, ...f] = c;

// console.log(a, b, c);
// console.log(d, e, f);

// let z = [...c, a, b];
// console.log(z);

// let obj = { a: 1, b: { m: 2 }, c: 3, d: 44 };
// let newObj = { ...obj };

// console.log(newObj);
// newObj.a = 6;
// // newObj.b.m = 7;
// console.log(newObj);
// console.log(obj);
// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);
// let newObjFromJSON = JSON.parse(jsonObj);
// console.log(newObjFromJSON);

// newObjFromJSON.a = 6;
// newObjFromJSON.b.m = 7;
// console.log(newObjFromJSON);

// console.log(obj);
let obj = {
  name: "wonde",
  displayName: function (x, y) {
    console.log(x + y + this.name);
  },
};

// obj.displayName();
// let newFun = obj.displayName.bind(obj);

// setTimeout(() => obj.displayName.call(obj, "My name ", "is "), 2000);

const me = {
  first: "John",
  last: "Smith",
  getFullName: function () {
    return this.first + " " + this.last;
  },
};

function log(height, weight) {
  // ‘this’ refers to the invoker
  console.log(this.getFullName() + " " + height + " " + weight);
}

let logNew = log.bind(me);

// logNew("180cm", "70kg");

// logNew("170cm", "60kg");

// const user = {
//   salute: "",

//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello

//     const setFrench = function (newSalute) {
//       //inner function
//       this.salute = newSalute;
//     };

//     setFrench("Bonjour");

//     console.log(this.salute); //Bonjour??
//   },
// };

// ===method 1

// let user = {
//   salute: "",

//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello

//     const setFrench = function (newSalute) {
//       //inner function
//       this.salute = newSalute;
//     };

//     let newSet = setFrench.bind(user);

//     newSet("Bonjour");

//     console.log(this.salute); //Bonjour??
//   },
// };
// user.greet();

// ===method 2
// let user = {
//   salute: "",

//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello

//     let bound = function (newSalute) {
//       //inner function
//       this.salute = newSalute;
//     };

//     const setFrench = bound.bind(user);

//     setFrench("Bonjour");

//     console.log(this.salute); //Bonjour??
//   },
// };
// user.greet();

// ===method 3

let user = {
  salute: "",

  greet: function () {
    this.salute = "Hello";
    console.log(this.salute); //Hello

    const setFrench = (newSalute) => (this.salute = newSalute);

    setFrench("Bonjour");

    console.log(this.salute); //Bonjour??
  },
};
user.greet();
