// 2->Constructor object

/*
const tinderUser = new Object() //sinleton object
const tinderUser = {} //non singleton object
*/
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Paresh"
tinderUser.isLoggedIn = false

console.log(tinderUser)

//nested object
const regularUser = {
    email: "anuup22@google.com",
    fullName: {
        userFullName: {
            firstName: "Anup",
            lastName: "Gupta"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullName?.userFullName.firstName); //? for null safety

//combining two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const objAdded1 = {obj1, obj2} //output as two separate objects
const objAdded2 = Object.assign({}, obj1, obj2) //(source, <-(mergeIn)target) { } is good practice
const objAdded3 = {...obj1, ...obj2} //best practice to add to objects/arrays

//array of objects
const user = [
    {
        id: 1,
        email: "something@google.com"
    },
    {
        id: 2,
        email: "something@google.com"
    },
    {
        id: 3,
        email: "something@google.com"
    },
]
console.log(user[1].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));