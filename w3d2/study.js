// "use strict";
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};
// console.log(Array.isArray(company.sales));
// function addSalaries(object) {
//   let totalSalary = 0;

//   function helper(obj) {
//     if (obj.salary) totalSalary += obj.salary;

//     for (let each of Object.keys(obj)) {
//       if (Array.isArray(obj.each)) {
//         for (let element of each) {
//           if (element.salary) {
//             totalSalary += element.salary;
//           } else {
//             return helper(element);
//           }
//         }
//       } else {
//         return helper(each);
//       }
//     }
//   }
//   helper(object);
//   return totalSalary;
// }
// console.log(addSalaries(company));
// function addSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let elem of Object.values(department)) {
//       sum += addSalaries(elem);
//     }
//     return sum;
//   }
// }
// console.log(addSalaries(company));

// let arr = [123, 654, 789, 456, 25, 321];
// let sumAbove500 = arr
//   .filter((item) => item > 500)
//   .reduce((prev, current) => prev + current, 0);
// console.log(sumAbove500);

// function sumTo(n) {
//   if (n === 1) return n;

//   return n + sumTo(n - 1);
// }
// console.log(sumTo(100));

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function fibonacci(n) {
//   if (n <= 1) return n;
//   //   console.log(n);
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));
function printList(listObj) {
  let arr = [];
  function helper(list) {
    // if (list) {
    //   if (list.next) {
    //     arr.push(list.value);
    //     helper(list.next);
    //   } else {
    //     arr.push(list.value);
    //   }
    // }
    let current = list;
    while (current.next) {
      arr.push(current.value);
      current = current.next;
    }
    arr.push(current.value);
  }
  helper(listObj);
  return arr;
}

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// console.log(printList(list));

// function printReverse(ll) {
//   if (ll.next) {
//     printReverse(ll.next);
//   }
//   console.log(ll.value);
//   // ll = null;
// }
// console.log(printReverse(list));

// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }
// console.log(add(3, 45, 6));
// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(1, 123, 500, 115, 66, 88));

// -------------final

// let ll = {};

// ll.add = function (n) {
//   if (!this.value) {
//     this.value = n;
//     this.next = null;
//   } else {
//     let current = this;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = { value: n, next: null };
//   }
//   return this;
// };

// ll.remove = function (n) {
//   let current = this;
//   let prev = null;
//   if (current.value) {
//     if (n === current.value) {
//       if (this.next) {
//         this.value = this.next.value;
//         this.next = this.next.next;
//       } else {
//         delete this.value;
//         delete this.next;
//       }
//       return true;
//     } else {
//       while (current.value !== n) {
//         prev = current;
//         current = current.next;
//       }
//       prev.next = current.next;
//       return true;
//     }
//   }
//   return false;
// };
// ll.print = function () {
//   let arr = [];
//   let current = this;
//   if (current.value) {
//     while (current.next) {
//       arr.push(current.value);
//       current = current.next;
//     }
//     arr.push(current.value);
//   }
//   let display = "LinkedList{";
//   for (let each of arr) {
//     display += each + ",";
//   }
//   display = display.slice(0, -1);
//   display += "}";
//   return display;
// };

// -------------final

// ll.add = function (n) {
//   if (!this.value) {
//     this.value = n;
//     this.next = null;
//   } else {
//     let current = this;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = {
//       value: n,
//       next: null,
//     };
//   }
//   return this;
// };

// ll.remove = function (n) {
//   let current = this;
//   let prev = null;

//   while (current.value) {
//     if (current.value === n) {
//       if (prev === null) {
//         this.value = current.next.value;
//         this.next = current.next.next;
//       } else {
//         prev.next = current.next;
//       }
//       return true;
//     }
//     prev = current;
//     current = current.next;
//   }
//   return false;

//   if (this.value) {
//     if (this.value === n) {
//       this.value = this.next.value;
//       this.next = this.next.next;
//     } else {
//       let current = this;

//       while (current.value !== n) {
//         // prev = current;
//         current = current.next;
//       }
//       if (current.next) {
//         //       prev.next=current.next.next;
//         //   } else {
//         current.value = current.next.value;
//         current.next = current.next.next;
//       }
//       //   current = current.next.value;
//       current = null;
//     }
//   }
//   return false;
// };

// console.log(ll);

// ll.add(1);
// console.log(ll);
// ll.add(2);
// console.log(ll);
// ll.add(3);
// console.log(ll);
// ll.remove(1);
// console.log(ll);
// console.log(ll.print());

// let timeId = setInterval(
//   function (wife, kids) {
//     console.log("mintes" + " & " + wife + " & " + [...kids]);
//   },
//   2000,
//   "robbie",
//   ["ian", "yael"]
// );
// setTimeout(() => clearTimeout(timeId), 5000);

// function printNumbers(from, to) {
//   let timeID = setInterval(function () {
//     console.log(from);
//     from++;
//     if (from > to) {
//       console.log("Done");
//       clearTimeout(timeID);
//     }
//   }, 1000);
// }
// printNumbers(1, 10);

// const user = {
//   salute: "",
//   greet: function () {
//     let self = this;
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     // let display = ;
//     const setFrench = function (newSalute) {
//       //inner function
//       self.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//   },
// };
// user.greet();
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    // let self = this;
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(group)
    );
  },
};
group.showList();
