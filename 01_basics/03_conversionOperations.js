/*
let score = true

//console.log(typeof score);    //both works fine and ; is optional
console.log(typeof(score));

let valueInNum = Number(score)

console.log(typeof(valueInNum));
console.log(valueInNum);         
//NaN since 39xyz is not a pure number
//O since there's NULL
//NaN for undefined type
//1 for true

let isLoggedIn = ""
let boolIsLoggedIn = Boolean(isLoggedIn)

console.log(boolIsLoggedIn); 
//true for 1
//true for any other string "Anup"
//false for empty string  ""  

let someNum = 39
let stringSomeNum = String(someNum)

console.log(stringSomeNum);
console.log(typeof stringSomeNum);
*/

// ******************* Operations ******************

let value = 39
let negValue = -value

let str1 = "Hello"
let str2 = " Anup"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");