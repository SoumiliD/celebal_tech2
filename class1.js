//var, const, let 

//var and let create variables that can be reassigned another value.
//const creates "constant" variables that cannot be reassigned another value.

// var number = 40
// function print() {
//   var square = number * number
//   console.log(square)
// }
// console.log(number) // 40
// print() // 1600


// global and local scope in var
// function print() {
//   var number = 50
//   var square = number * number
//   console.log(square)
// }
// print() // 2500
// console.log(number)
// ReferenceError: number is not defined


// redeclaration possible with var
// var number = 50
// console.log(number) // 50
// var number = 100
// console.log(number) // 100


// hoisting allowed for var
// console.log(number) // undefined
// var number = 50
// console.log(number) // 50


// reassignment allowed for let
// let number = 50
// console.log(number) // 50
// number = 100
// console.log(number) // 100


// Redeclartion not allowed for let
// let number = 50
// let number = 100
// SyntaxError: Identifier 'number' has already been declared


// hoisting not allowed for let
// console.log(number)
// // ReferenceError: Cannot access 'number' before initialization
// let number = 50


// global, local and block scope for const
// const number = 50
// function print() {
//   const square = number * number
//   if (number < 60) {
//     var largerNumber = 80
//     const anotherLargerNumber = 100
//     console.log(square)
//   }
//   console.log(largerNumber)
//   console.log(anotherLargerNumber)
// }
// print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined


// redeclaration not allowed for const
// const number = 50
// const number = 100
// // SyntaxError: Identifier 'number' has already been declared


// Reassignment not allowed const
// const number = 50
// number = 100
// TypeError: Assignment to constant variable


//Hoisting not allowed for const
// console.log(number)
// // ReferenceError: Cannot access 'number' before initialization
// const number = 50


// There are different types of JavaScript operators:
// Arithmetic Operators (+, -, /, *, %, **, ++, --)
// Assignment Operators (=, +=, -=, *=, /=, **=)
// Comparison Operators (<, > , <=, >=, ==, ===, !=, !==)
// String Operators (concat +)
// Logical Operators (&&, ||, !)
// Bitwise Operators (&, |, ~, ^, <<, >>)
// Ternary Operators (x : y ? z)
// Type Operators (typeof(), instanceof())


// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object


// Numbers:
// let length = 16;
// let weight = 7.5;

// Strings:
// let color = "Yellow";

// Booleans
// let x = true;
// let y = false;

// Object:
// const person = {
    // firstName:"John", 
    // lastName:"Doe"
// };

// Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// Date object:
// const date = new Date("2022-03-25");
