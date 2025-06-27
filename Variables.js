//x, y, and z are undeclared variables.
x=5;
y=6;
z=x+y;
console.log(z);
console.log("The value of x is "+x);
console.log("The value of y is "+y);
console.log("The value of z is "+z);

//The let and const keywords were added to JavaScript in 2015.

let a=10;
let b=20;
let c=a+b;
console.log("The result is : "+c)

//These are constant values and cannot be changed.
//const variables must be assigned a value when they are declared
const p = 5;
const q = 6;
const r = p + q;
console.log("The sum is : "+r)

/*
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ 
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/

/*
Difference between let and var
Variables declared with the var always have Global Scope.
Variables declared with let have Block Scope

{
  let x = 2;
}
// x can NOT be used here


{
  var x = 2;
}
// x CAN be used here


-->Variables defined with var can be redeclared.
-->Variables defined with let can not be redeclared.

With let you can not do this:
let x = "John Doe";
let x = 0;--> will show error

With var you can do this:
var x = "John Doe";
var x = 0;-->will not show any error
*/

