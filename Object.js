
//It is a common practice to declare objects with the const keyword.
const person = {name:"Nafis" , email:"nafis@gmail.com" , phone:"015XXXXXXX"}


console.log(person.email)

const details ={}

details.name="Nafis"
details.sex="Male"
details.age=25

console.log(details.sex)


// Using the new Keyword

const car = new Object()

car.name="Toyota"
car.model="AXIO"
car.price=250

console.log(car.price)


const name ={
    firstName:"Nafis",
    middleName:"Foysal",
    lastName:"Ashik",
    fullName: function(){
        return this.firstName+" "+this.middleName+" "+this.lastName
    } 
}
//In the example above, this refers to the name object
console.log(name.fullName())


// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.

/*
const x = person;
if person is an object then then The object x is not a copy of person .The object x is person. The object x and the person share the same memory address.If any changes to x will also change person.
*/

const data ={
    firstName:"Nafis",
    lastName:"Ashik",
    age:25,
}

const x = person
x.age=20
console.log(person.age)


const nafis = {
    sex:"Male",
    age:25,
    university:"KUET"
}

console.log(nafis["age"])


let a = "address"
let b = "blood_group"

const info ={
    address:"Chuadanga",
    blood_group:"A+"
}

console.log("Address : "+info[a]+" "+"Blood Group : "+info[b])

//The delete keyword deletes a property from an object

const manus ={
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

delete manus["age"]

console.log(manus["age"]) //undefined

//Nested Objects

myObj ={
    firstName:"Jhon",
    lastName:"Doe",
    age:30,
    myCar: {
        car1:"SUV",
        car2:"BMW",
        car3:"Ford"
    }
}

console.log(myObj.myCar.car3)
console.log(myObj["myCar"]["car3"])

myObj.fullName = function(){
    return (this.firstName+" "+this.lastName).toUpperCase()
}

console.log(myObj.fullName())

function Person(first , last , age)
{
    this.first = first
    this.last = last
    this.age = age
    this.country = "Bangladesh"
}

const person1 = new Person("Nasim" , "Mahmud" , 30)
console.log(person1.first)
console.log(person1.country)

//Constructor Function Methods

function Person(first , last , age)
{
    this.first = first
    this.last = last
    this.age = age
    this.country = "Bangladesh"
    this.fullName = function(){
        return (this.first+" "+this.last).toUpperCase()
    }
}

const person2 = new Person("Nasim" , "Mahmud" , 30)

console.log(person2.fullName())