//two ways to declare objects 
// 1-> as literals(not singleton)             2-> as constructor (singleton)
//sinleton -> it's a only sigle object of its own type(sinle instance)
// Object.create

// 1->Object literals

const mySymbol = Symbol("Key1")

const User = {
    [mySymbol]: "mySymbolDemo", //[ ] is must to declare a symbol
    name: "Anup",
    "full name": "Anup Gupta",
    age: 20,
    location: "Mumbai",
    email: "anuup22@gmail.com",
    isLoggedIn: true,
    lastLoggedInDays: ["Monday", "Saturday"]
}
/*
console.log(User.name);  //way-1
console.log(User["name"]); //way-2
console.log(User["full name"]); //compolsory if key is in a string
console.log(User[mySymbol]); //***** Syntax to access a symbol
*/

// Object.freeze(User) //to make all variables unchangable in user

User.greeting = function(){
    console.log("Hello User (function call) :)");
}
User.newGreeting = function(){
    console.log(`Hello, good evening ${this.name}`) // `` -> string entapulation
}
console.log(User.greeting())
console.log(User.greeting); //will give a function return back
console.log(User.newGreeting());
