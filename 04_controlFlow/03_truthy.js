/*
//falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
"0", "false", " ", [], {}, function(){}
*/

//to check for empty array
const arr = []
if(arr.length < 1){  
    console.log("Array is Empty");
}

//to check for empty object
const obj = {}
if(Object.keys(obj).length < 1){
    console.log("Object is Empty");
}

//Nullish Coalescing Operator (??) & for undefined
let val1 = 5 ?? 10 //if null assign 10 (usually a database function call)

//Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")