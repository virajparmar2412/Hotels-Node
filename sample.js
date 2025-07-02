var prompt = require("prompt-sync")();

// var a = 5;
// var b = 12;
// ans = a + b;
// console.log(ans);

// if (a < 4) {
//   console.log("The Number a is lesser than 4");
// } else {
//   console.log("The Number is greater than 4");
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

// const Person = {
//   name: "Viraj Parmar",
//   rollNo: 383,
//   isStudent: true,
//   hobbies: ["volleyball", "music"],
// };

// console.log(Person.name);

// const ages = [16, 15, 19, 20, 24];
// const result = ages.filter(checkAge);

// function checkAge(age) {
//   return age <= 20;
// }
// console.log(result);
// const age = prompt("Please enter your age: ");
// if (age < 18) {
//   console.log("Your discount is 20%");
// } else console.log("Your discount is 30%");

// var length;
// length = prompt("Enter the length: ");
// var width;
// width = prompt("Enter the width: ");
// var Area = length * width;
// console.log("The area is: ", Area);

const jsonString = '{"Name":"Hello", "Age":27, "City":"Bhavnagar"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.Age);

const ObjtoString = { Name: "Viraj", Age: 28 };
const jsonStringified = JSON.stringify(ObjtoString);
console.log(jsonStringified);

console.log(
  typeof jsonString,
  typeof jsonObject,
  typeof ObjtoString,
  typeof jsonStringified
);
