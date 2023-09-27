const marvel = ["IronMan", "Thor", "SpiderMan"]
const dc = ["SuperMan", "Flash", "Batman"]

// marvel.push(dc) //array accepts all data types a array too
const allHeros = marvel.concat(dc) 
console.log(allHeros);

const allHeros2 = [...marvel, ...dc, ...["StanLee"]] //... spread operator is frequently used
console.log(allHeros2);

const anotherArray = [1, 2, [3, 4], [5, 6, [7, 8, 9]]]

const anotherArrayFlat = anotherArray.flat(Infinity) //makes 1D array
console.log(anotherArrayFlat);

const name = "Anup"
console.log(Array.isArray(name));
console.log(Array.from(name));
console.log(Array.from({key: name})); //results [] empty array //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))