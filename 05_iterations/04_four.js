// for each continued

const codeLang = ['JS', 'Ruby', 'Java', 'Python', 'CPP']

//return value from for each loop
const values = codeLang.forEach( (item) => {
    console.log(item);
    return item //returns nothing
})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newArray = myNums.filter( (num) => num>4 )
const newArray = myNums.filter( (num) => {
    return num>4 //if { } is used return keyword is compolsory to use
} )

const newArray2 = myNums.forEach( (num) => {
    if(num>4) newArray2.push(num)
})
console.log(newArray);