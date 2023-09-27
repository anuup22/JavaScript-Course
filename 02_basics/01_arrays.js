// array
const myArray = [2, 3, 4, 5]
const myHeros = ["Shaktimaan", "Naagraj"]

const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log(myArray[5]);
console.log(myHeros[0]);
console.log(myArray2);

// methods 

myArray2.push(10)
myArray2.push(15)

myArray2.unshift(0) //to insert at begining
myArray2.shift(0) //to pop from begining
myArray2.pop()

console.log(myArray2.includes(13))
console.log(myArray2.indexOf(7));

const newArray = myArray2.join() //to convert entire array into a string
const newArray2 = myArray2.slice(1,3) //gives elements from index 1 to 2
const newArray3 = myArray2.splice(1,3) 
//gives elements from index 1 to 3 and 
//most important*** removes those elements from original array