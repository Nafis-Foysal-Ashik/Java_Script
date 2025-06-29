/*
Arrays are Not Constants
The keyword const is a little misleading.
It does NOT define a constant array. It defines a constant reference to an array.
Because of this, we can still change the elements of a constant array.


JavaScript Array toSorted() or toReversed() Method creates a new array, keeping the original array unchanged
*/

const cars = []
cars[0]="Saab"
cars[1]="Volvo"
cars[2]="BMW"

console.log(cars)

const car = new Array('A','B','C')
console.log(car)

cars[0]='Toyota'
console.log(cars)

const fruits = ['Banana' , 'Orage' , 'Apple' , 'Mango']
console.log(fruits.toString())

let len = fruits.length
console.log(len)

const sorted_fruits = fruits.sort()// // Sorts the array
console.log(sorted_fruits)

// Looping Array Elements

let text=""
for(let i=0 ; i<len ; i++)
{
    text+=sorted_fruits[i]
}
console.log(text)


// Adding Array Elements
fruits.push("Lemon")
console.log(fruits)

//New element can also be added to an array using the length property
fruits[fruits.length]='Lemo'
console.log(fruits)

//Adding elements with high indexes can create undefined "holes" in an array
const hole = ['A','B','C']
hole[9]='H'
console.log(hole) //[ 'A', 'B', 'C', <6 empty items>, 'H' ]


/*
Many programming language support array with name index but in JavaScript it does not support .In JavaScript arrays always use number index
If you use named index JavaScript will rederine the array to an object
*/

// const points = new Array()
// const points =[]

const points = new Array(10,20,30)
console.log(points)

let type = typeof(fruits)
console.log(type)

//Nested Arrays and Objects
const myObj = {
    name : "Nafis",
    age : 30,
    cars : [
        {
            name : "Ford",
            model : [
                "Fiesta",
                "Focus",
                "Mustag"
            ]
        },
        {
            name : "BMW",
            model : [
                "320",
                "X3",
                "X5"
            ]
        }
    ]
}

for(let i=0 ; i<myObj.cars.length ; i++)
{
    console.log(myObj.cars[i].name)
    for(let j=0 ; j<myObj.cars[i].model.length ; j++)
    {
        console.log(myObj.cars[i].model[j])
    }
}


//JavaScript Array Methods
/*
Array length	Returns the length (size) of an array
Array toString()	Converts an array to a comma separated string of values
Array at()	Returns an indexed element from an array
Array join()	Joins all array elements into a string
Array pop()	Removes the last element from an array
Array push()	Adds a new element to an array
Array shift()	Removes the first array element
Array unshift()	Adds a new element at the beginning of an array
Array delete()	Creates undefined holes in the array
Array concat()	Creates a new array by merging existing arrays
Array copyWithin()	Copies array elements to another position in the array
Array flat()	Creates a new array from sub-array elements
Array slice()	Slices out a part of an array
Array splice()	Adds new items to an array
Array toSpliced()	Adds new items to an array in a new array 
 */

let fruits_str=fruits.toString()
console.log(fruits)

let fruits_name = fruits.at(2)
console.log(fruits_name)

const fruits_join = fruits.join("*")
console.log(fruits_join) //Apple*Banana*Mango*Orage*Lemon*Lemo

fruits.pop()
console.log(fruits)


console.log(fruits)//[ 'Apple', 'Banana', 'Mango', 'Orage', 'Lemon' ]
fruits.shift()
console.log(fruits) //[ 'Banana', 'Mango', 'Orage', 'Lemon' ]

fruits.unshift("Apple")
console.log(fruits) //[ 'Apple', 'Banana', 'Mango', 'Orage', 'Lemon' ]

fruits[0] = "Jani na"
console.log(fruits) //[ 'Jani na', 'Banana', 'Mango', 'Orage', 'Lemon' ]

/*
Using delete() leaves undefined holes in the array.
Use pop() or shift() instead.
*/

delete fruits[0] 
console.log(fruits) //[ <1 empty item>, 'Banana', 'Mango', 'Orage', 'Lemon' ]
console.log(fruits[1]) 

//JaveScript Array Concatinate
const myGirls = ["Rahima" , "Karima"]
const myBoys = ["Rahim" , "Karim"]

const myChildren = myGirls.concat(myBoys)
console.log(myChildren)

//Merging more than 2 array
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const merged_array = arr1.concat(arr2, arr3);
console.log(merged_array)

//Array copyWithin()
const arr=['Apple','Banana' , 'Cherry']
arr.copyWithin(2,0)
console.log(arr) //[ 'Apple', 'Banana', 'Apple' ]

//Copy to index 2, the elements from index 0 to 2
arr.copyWithin(2,0,2)
console.log(arr) //[ 'Apple', 'Banana', 'Apple' ]

//Flattening an Array
//Flattening an array is the process of reducing the dimensionality of an array.

const myArr = [[1,2],[3,4],[5,6],[2,3]]
const newArr = myArr.flat()
console.log(newArr) //[1, 2, 3, 4,5, 6, 2, 3]

const array = [1, 2, 3, 4,5, 6]
const flat_map = array.flatMap(x => (x,x*10))
console.log(flat_map) //[ 10, 20, 30, 40, 50, 60 ]


/**
 * Splicing and Slicing Arrays
 * The first parameter defines the position where new       elements should be added (spliced in).
 * The second parameter defines how many elements should be removed.
 */
const fruits_splice = ["Banana", "Orange", "Apple", "Mango"];
fruits_splice.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits_splice) //[ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]


/*
The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array


toSpliced(index_no , no_of_element_to_delete)
 */
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 3);
console.log(spliced)


//JavaScript Array Search
/*

Array indexOf()	Returns the first position of an element value
Array lastIndexOf()	Returns the last position of an element value
Array includes()	Returns true if an element value is present in an array
Array find()	Returns the value of the first element that passes a test
Array findIndex()	Returns the index of the first element that passes a test
Array findLast()	Returns the value of the last element that passes a test
Array findLastIndex()	Returns the index of the last element that passes a test*/

//The indexOf() method searches an array for an element value and returns its position. returns -1 if the item is not found.
//Syntax -> array.indexOf(item , start)
const fruit = ["Apple", "Orange", "Apple", "Mango"];
let position = fruit.indexOf("Apple");
console.log(position)

let last = fruit.lastIndexOf("Apple")
console.log(last) //2 -> as occured at index position 2

//JavaScript Array includes()
//It cheked if an element exists in the array or not
let che = fruit.includes("Mango")
console.log(che)


//The find() method returns the value of the first array element that passes a test function.
const number = [4,9,16,15,20]
let first = number.find(myFunction)

function myFunction(value , index)
{
    return value>10
}

console.log(first) //output : 16

//The findIndex() method returns the index of the first array element that passes a test function
let indx = number.findIndex(myIndex)
function myIndex(value , index , number)
{
    return value>18
}

console.log(indx)

//The findLastIndex() method finds the index of the last element that satisfies a condition
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x >= 30);
console.log(pos)

//The sort() method sorts an array alphabetically
const fol = ["Banana", "Orange", "Apple", "Mango"];
fol.sort()
console.log(fol)

//The reverse() method reverses the elements in an array:
fol.reverse()
console.log(fol)

/*
JavaScript Array toSorted() Method
The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
*/

const month = ["Jan", "Feb", "Mar", "Apr"]
const sorted = month.toSorted()
console.log(sorted)

const reversed = month.toReversed()
console.log(reversed)

//Numeric Sort
const bindu = [40, 100, 1, 5, 25, 10]
bindu.sort()
console.log(bindu)

bindu.reverse()
console.log(bindu)

//JavaScript Array Iteration
// The forEach() method calls a function (a callback function) once for each array element

const digits= [45, 4, 9, 16, 25]
digits.forEach(print_func)

function print_func(value , index ,array)
{
    console.log(value)
}

/*
JavaScript Array map()
The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
*/

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

//function myFunction(value , index , array)
function myFunction(value)
{ 
    return value*2
}
console.log(numbers2)

//javaScript flatMap()
const numbers3 = numbers1.flatMap(z => z*2)
console.log(numbers3)

//The filter() method creates a new array with array elements that pass a test
const filet_arr = number.filter(myFilter)

function myFilter(value , index , array)
{
    return value>15
}
console.log(filet_arr)

//JavaScript Array reduce()
let sum = number.reduce(myReduce)

function myReduce(total , value , index , array)
{
    return total+value
}

console.log(sum)

// The reduce() method can accept an initial value
let total_sum = number.reduce(myInitialReduce,100)

function myInitialReduce(total , value )
{
    return total+value
}

console.log(total_sum)

//every() =-> if all the value satisfy the condition then it will return true otherwise it will return false
const age = [50,14,35,20,25,56]
let adult = age.every(myAge)

function myAge(value,array,index)
{
    return value>=18
}
console.log(adult) //will return false as 14 is less than 18

//some() => if at least one the value satisfy the condition then it will return true if all the value don't fullfill the condition then it will return false

let over50 = age.some(mySome)

function mySome(value , array)
{
    return value>50
}
console.log(over50)

//form() -> will convert sting into array
let txt = "ABCDEFG";
let new_arr = Array.from(txt);
console.log(new_arr) //output : ['A', 'B', 'C','D', 'E', 'F','G']


//keys() -> return the index number
const keys = new_arr.keys()

for(let x of keys)
{
    console.log(x)
}


//entries() -> will return index number with value
const entry = new_arr.entries()

for(let i of entry)
{
    console.log(i)
}
/*
[ 0, 'A' ]
[ 1, 'B' ]
[ 2, 'C' ]
[ 3, 'D' ]
[ 4, 'E' ]
[ 5, 'F' ]
[ 6, 'G' ]
*/

//Array with() method as a safe way to update elements in an array without altering the original array

console.log(months) //[ 'Jan', 'Feb', 'Mar', 'Apr' ]
const myMonth = months.with(2 , "March")
console.log(myMonth) //[ 'Jan', 'Feb', 'March', 'Apr' ]

// JavaScript Array Spread (...) -> will 2 or more arrays silimar to concat()
const ar1 = [1, 2, 3];
const ar2 = [4, 5, 6];

const ar3 = [...ar1, ...ar2]
console.log(ar3)

//can be used as a copy of an array
const cpy_ar = [...ar1]
console.log(cpy_ar)

//The spread operator (...) can be used to pass arguments to a function

let minVal = Math.min(...ar1)
let maxVal = Math.max(...ar1)
console.log(minVal + " "+ maxVal)
