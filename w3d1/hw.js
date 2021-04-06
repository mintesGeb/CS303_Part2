// "use strict";
// -----1-----
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// ----
// apply works the same way in this case because there is no argument - just replace "call"

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
//   }
//   let user = {
//   name: 'John',
//   loginOk() {
//   alert(`${this.name} logged in`);
//   },
//   loginFail() {
//   alert(`${this.name} failed to log in`);
//   },
//   };
//   askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));
// ----2-----
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));

// apply works the same way in this case because there is no argument - just replace "call"

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(()=>user.login.call(user, true),()=> user.login.call(user, false));
// -----3-----

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    let display = function (student) {
      console.log(this.title + ": " + student);
    };
    this.students.forEach(display.bind(group));
  },
};
group.showList();
