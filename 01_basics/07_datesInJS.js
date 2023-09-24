let myDate = new Date()
/*
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
*/

// let myCreatedDate = new Date(2023, 0, 21) //0 means jan, 1->feb
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 21, 4, 3)
let myCreatedDate = new Date("03-01-2023")
console.log(myCreatedDate.toLocaleString());

/*
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
*/
console.log(Math.floor(Date.now()/1000)); //to convert miliseconds to seconds

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()) //similarly there are other methods

// `Date is ${newDate.getDate()} and time is ${newDate.getTime()}` 

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
}));