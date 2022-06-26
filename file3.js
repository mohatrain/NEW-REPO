function myAge(yob) {
  var current = 2022;
  console.log(current - yob);
}
// myAge(1834)
// console.log(`Well I can also proudly put it that I am ${myAge(2000)} years old and this is really important`);

let num1 = 12;
let num2 = 23;
let num3 = 34;
// if(num1 == 12 && num2 != 0 || num3 == 243){
// console.log("Well this is alot to put together")
// }else{console.log("It could make sense but not today THANK YOU")}

// SWITCH STATEMENTS
// var num = 10;
// switch (num) {
//     case 10:
//         console.log("The number is 100")
//         break;
//     case num > 100:
//         console.log("Probably the number is greater than 100 and this is really impressive")
//         break;
//     default:
//         console.log("This is the default block and this is really awesome man")
//         break;
// }
var myObj = {
  x: 1,
  y: 2,
  z: 3,
};
var keys = "";
function looping() {
  for (k of Object.keys(myObj)) {
    return (keys += k);
  }
}
var emp = [];
// console.log(looping());
var colors = [
  "blue",
  "yellow",
  "white",
  "cyan",
  "Mangenta",
  "Blinded",
  3,
  false,
];
// console.log(colors.length)
// colors.push("Added a string")
// console.log(colors.length);
// console.log(colors)
colors.unshift("Black Magic");
// colors.entries.concat("Mr. ")
console.log(colors);
