/*
The forEach() method calls a function (a callback function) once for each array element

Structure -> array.forEach(myFunction)

fuction myFuction(value , index , array)
{
    condition
}

Note that the function takes 3 arguments:
The item value
The item index
The array itself

Diff between for...in and for...of

Loop Type       Iterates over       Uer For
for...in	    Keys / Indexes	    Objects, Arrays (rarely)
for...of	    Values	            Arrays, Strings, Iterables

*/

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}
console.log(txt)


//The For In Loop
//The JavaScript for in statement loops through the properties of an Object

const person = {name:"Nafis" , email:"nafis@gmail.com" , phone:"015XXXXXXX"}

for(let x in person){
    console.log(x+ " "+ ":" + person[x])
}

const number = [45, 4, 9, 16, 25];
let text=""

for(let x in number)
{
    text+=number[x]
}
console.log(text)

let i=0
while(i<10)
{
    console.log(i)
    i++;
}

let x=1
do{
    console.log("Nafis")
    x++;
}while(x<0)