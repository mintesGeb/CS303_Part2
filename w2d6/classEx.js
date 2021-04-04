// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let shooter = function () {
//       console.log(i);
//     };
//     shooters.push(shooter());
//     i++;
//   }
//   return shooters;
// }
// let army = makeArmy();
// console.log(army[0]);

// let arr = [1, 2, 3];
// let i = 0;

// let timeID = setInterval(() => console.log(arr[i++]), 1000);
// setTimeout(() => clearTimeout(timeID), 4000);

function printNumbers(from, to) {
  let timeID = setInterval(() => console.log(from++), 1000);
  setTimeout(() => clearTimeout(timeID), (to + 1) * 1000);
}
printNumbers(1, 10);
