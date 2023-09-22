const name = "anup "
const repoCount = 13

//console.log(name + repoCount + " value");

console.log(`hello my name is ${name}and my repo count is ${repoCount} on github`); 
//use placeholder to fill var

const gameName = new String("a-n-u-p-g")

console.log(gameName.split('-'));
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 2) 
//exclusive of index 2 and -indexes are not accepted
console.log(newString);

const anotherString = gameName.slice(-4, 4)
//negative indexes are accepted
console.log(anotherString);

const newString1 = "    anup    "
// console.log(newString1);
console.log(newString1.trim());

const url = "https://anuup22.com/anup%39gupta"
console.log(url.replace('%39','_'));
console.log(url.includes('anuup22'));
