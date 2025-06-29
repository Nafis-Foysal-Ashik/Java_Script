/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
The values can be of any type, primitive values or objects.

2 ways to create a set
Passing an array to new Set()
Create an empty set and use add() to add values
*/

const letters = new Set(['a','b','b','c'])
console.log(letters) //{ 'a', 'b', 'c' }

const char = new Set()
char.add("a")
char.add("b")
char.add("c")
char.add("d")
char.add("d")
console.log(char)

let text=""
for(let x of letters)
{
    text+=x
}
console.log(text)

let size = letters.size
console.log(size)

//has() -> The has() method returns true if a specified value exists in a set.
let res = letters.has('a')
console.log(res)

let ch=""
letters.forEach(function(value)
{
    ch+=value
})
console.log(ch) //abc


//The values() method returns an Iterator object with the values in a Set
//A Set has no keys, so keys() returns the same as values().

const values = letters.values()
console.log(values) //{ 'a', 'b', 'c' }
let str=""
for(let i of values)
{
    str+=i
}
console.log(str) //abc

const keys = letters.keys()
console.log(keys) //{ 'a', 'b', 'c' }

/*
The entries() method is supposed to return a [key,value] pair from an object.
A Set has no keys, so the entries() method returns [value,value].
This makes Sets compatible with Maps.
*/

const myItr = letters.entries()
console.log(myItr) //{ [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }

let str1=""

for(const entry of myItr)
{
    str1+=entry
}
console.log(str1) //a,ab,bc,c

/*
different type of set operation link 
https://www.w3schools.com/js/js_set_logic.asp
*/

/*
-> Union <-
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);
const C = A.union(B); // abcd

-> Intersection <-
const D = A.intersection(B) //bc

-> Difference <-
const E = A.difference(B) //a

-> SymmetricDifference <-
The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both

const F = A.symetricDifference(B) //ad

//The isSubsetOf() method returns true if all elements in this set is also elements in the argument set
let ans = A.isSubSetOf(B)

The isSupersetOf() method returns true if all elements in the argument set are also in this set

let answer = A.isSupersetOf(B);

The isDisjointFrom() method returns true if this set has no elements in common with the argument set
let answer = A.isDisjointFrom(B); //false


*/