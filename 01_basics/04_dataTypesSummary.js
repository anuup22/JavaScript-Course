// Primitive 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 39
const scoreValue = 39.5

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined OR userEmail = undefined

const id = Symbol("2211")
const anotherId = Symbol("2211") 

//both "2211" are not same for id and anotherId since it is a Symbol
console.log(id === anotherId);

const bigNum = 5940753573945n //n represents a bigInteger

// Non-Primitive(Reference) : Array, Objects, Functions

//Array
const heros = ["Shaktimaan", "Naagraj", "Doga"]

//Object
let myObj = {
    name: "Anup",
    age: "20"
}

//Function
const myFunction = function(){
    console.log("Hello, world!");
}

//typeof
console.log(myObj.age);