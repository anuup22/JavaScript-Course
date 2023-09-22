/*
const score = 400
const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 23.57971
console.log(anotherNumber.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
*/

// ******************** Maths *******************

/*
console.log(Math)
console.log(Math.abs(-39));
console.log(Math.round(49.123))

console.log(Math.ceil(39.123))
console.log(Math.floor(39.123))

console.log(Math.min(3,6,1,3,5,7,0,2))
console.log(Math.max(3,6,1,3,5,7,0,2))
*/

console.log(Math.random());  //ranges 0 to 1 (random is used mostly)
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20

console.log((Math.floor(Math.random()*(max-min+1))) + min); 
//this is important