/*
You can create a JavaScript Map by:
1->Passing an Array to new Map()
2->Create a Map and use Map.set()
*/

const fruits = new Map([
    ["Apple" , 500],
    ["Bananas" , 600],
    ["Oranges" , 700]
])

let item = fruits.get("Apple")
console.log(item)


const info = new Map()

info.set("Nafis",75)
info.set("Miraz",64)
info.set("Bayzed",79)
let nm = info.get("Miraz")
console.log(nm)

let len = info.size
console.log(len)

//The delete() method removes a map element
info.delete("Bayzed")
console.log(info.get("Bayzed")) //undefined

//The clear() method removes all the elements from a map
info.clear()
console.log(info.size) //0

//The has() method returns true if a key exists in a map
let bool = fruits.has("Apple")
console.log(bool)

//forEach() -> method

let text=""
fruits.forEach(function(value , key){
    text += key + " " + value + "\n"
})

console.log(text)

//The entries() method returns an iterator object with the [key,values] in a map:
let str=""
for(let x of fruits.entries())
{
    str+=x
}
console.log(str)

//The keys() method returns an iterator object with the keys in a map

let key=""
for(const x of fruits.keys())
{
    key+=x
}
console.log(key)

// The values() method returns an iterator object with the values in a map

let ch = ""

for(const x of fruits.values())
{
    ch+=x
}
console.log(ch)

let total=0;

for(fruit of fruits.values())
{
    total+=fruit
}
console.log(total)