import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// console.log(
//   numbers.map(function(num) {
//     return num ** 2;
//   })
// );

//Filter - Create a new array by keeping the items that return true.
// console.log(
//   numbers.filter(function(num) {
//     return num > 5;
//   })
// );

//Reduce - Accumulate a value by doing something to each item in an array.

// console.log(
//   numbers.reduce(function(accumulator, num) {
//     return (accumulator += num);
//   })
// );
//Find - find the first item that matches from an array.

// console.log(
//   numbers.find(function(num) {
//     return num > 1;
//   })
// );

//FindIndex - find the index of the first item that matches.
// console.log(
//   numbers.findIndex(function(num) {
//     return num == 48;
//   })
// );

console.log(emojipedia);

var meanings = emojipedia.map(function(entry) {
  return entry.meaning.substring(1, 100);
});

console.log(meanings);

// console.log(
//   meanings.map(function(meaning) {
//     return meaning.substring(1, 100);
//   })
// );
