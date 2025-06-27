//When adding a number and a string, JavaScript will treat the number as a string
let x = "Volvo" + 16;

console.log(x);

//JavaScript evaluates expressions from left to right.

let y = 16 + 4 + "Volvo";
console.log(y);

let z = "Volvo" + 16 + 4;
console.log(z);

//JavaScript Types are Dynamic
let a;       // Now a is undefined
a = 5;       // Now a is a Number
a = "John";  // Now a is a String

//Strings are written with quotes. You can use single or double quotes:

// Using double quotes:
let carName1 = "Volvo XC60";
// Using single quotes:
let carName2 = 'Volvo XC60';

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

//Exponential Notation
let p = 123e5;    // 12300000
let q = 123e-5;   // 0.00123

//JavaScript Arrays
const cars = ["Saab", "Volvo", "BMW"];

//JavaScript Objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName)

//The typeof operator returns the type of a variable or an expression:

let str = typeof "John Doe"     // Returns "string"
console.log(str)