// for of loop
/*
const arr = [1, 2, 3, 4, 5]
for(let num of arr){
    console.log(num);
}

const greeting = "Hello Anup!"
for(const letter of greeting){ //if we use in instead or of we'll get indices
    console.log(`Each character is ${letter}`)
}
*/


// Map

const map = new Map() //map stores unique entries

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
/*
console.log(map);
for(const key of map){
    console.log(key);
}
*/
for(const [key, value] of map){
    console.log(key, ":", value);
}
