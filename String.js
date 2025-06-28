let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len = text.length

console.log(len)

let str = "We are the so-called \"Vikings\" from the north"
console.log(str)//We are the so-called "Vikings" from the north

let str2 = 'It\'s all right'
console.log(str2)

//Templates are strings enclosed in backticks (`This is a template string`).Templates allow multiline strings
let t =
`The quick
brown fox
jumps over
the lazy dog`;

console.log(t)

//But strings can also be defined as objects with the keyword new
let y = new String("Nafis")

/*
There are 4 methods for extracting string characters:
The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/

let txt = "Hello World"
//The charAt() method returns the character at a specified index (position) in a string:
let char = txt.charAt(0)
console.log(char)

let code = txt.charCodeAt(0)
console.log(code)//Return the ASCII value of index position
let letter = txt.at(0);
console.log(letter)
console.log(txt[0])

txt[0]="A" //Give no error but does not work
console.log(txt) //Hello World

let name=  "Nafis , Foysal , Ashik"
//slice() extracts a part of a string and returns the extracted part in a new string.
let part = name.slice(7,13)
console.log(part)

let part_1=name.slice(7)
console.log(part_1) // Foysal Ashik

// let negative = slice(-12)
// console.log(negative) -> will give error

let tet = "Apple, Banana, Kiwi";
let prt = text.slice(-12,-6)
console.log(prt)

/*
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().
*/

let info = name.substring(7,13) //copy index 7 to 13
console.log(info)

let sub = name.substring(13) //copy from index 13 to EOF(end of the string)
console.log(sub)

//If the first parameter is negative, the position counts from the end of the string.

let neg = name.substring(-10) //will return the entire string
console.log(neg)

let uppper = txt.toUpperCase()
console.log(uppper)

let lower = txt.toLocaleLowerCase()
console.log(lower)

//concat() joins two or more strings

let str3 = "Hello"
let str4 = "World"
console.log(str3.concat(" " , str4))

let str5 = "    Nafis   "
let str6 = str5.trim()
console.log(str6) 

//JavaScript String padStart()
let address= "1"
let padded = address.padStart(4,"0") //Pad a string with "0" until it reaches the length 4
console.log(padded)

let pad = address.padEnd(5,"X")
console.log(pad)

//JavaScript String repeat()
let repeat = txt.repeat(3)
console.log(repeat)

//Replacing String Content
let str7 = "Please visit Microsoft!";
let newstr7 = str7.replace("Microsoft", "W3Schools");
console.log(newstr7)

//JavaScript String Search
//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

let str8 = "Please locate where 'locate' occurs!"
let pos = str8.indexOf("locate")
console.log(pos)

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let last_pos = str8.lastIndexOf("locate")
console.log(last_pos)

let src = str8.search("locate");
console.log(src)

//The match() method returns an array containing the results of matching a string against a string (or a regular expression)
let string = "The rain in SPAIN stays mainly in the plain"
let mtc = string.match('ain')
console.log(mtc)
/*
output
[
  'ain',
  index: 5,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
]
*/

let it = string.matchAll('ain')
console.log(it)

//JavaScript String includes()
//The includes() method returns true if a string contains a specified value.
//Otherwise it returns false.

let inc = string.includes("spain")
console.log(inc)

//The startsWith() method returns true if a string begins with a specified value.

let start = string.startsWith("The")
console.log(start)

//The endsWith() method returns true if a string ends with a specified value.
let end = string.endsWith("plain")
console.log(end)

//Variable Substitutions
let first_name="Nafis"
let last_name="Foysal"

let full_name=`Welcome ${first_name} ${last_name}`
console.log(full_name)