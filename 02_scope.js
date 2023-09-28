/*
// var temp = 39
let temp = 39 // use let for scope safety

if(true){
    let temp = 40
    console.log("Inside if-statement: ", temp);
}
console.log(temp);

function one(){
    const userName = "Anup"
    function two(){
        const webSite = "YouTube"
        console.log(userName);
    }
    console.log(webSite); //error
    two();
}
one()

if(true){
    const userName = "Anup"
    if(userName == "Anup"){
        const webSite = " YouTube"
        console.log(userName + webSite);
    }
    console.log(webSite); //error
}
console.log(userName); //error
*/


//++++++++++++++ Something Interesting +++++++++++++++++ 

console.log(addNum(2)) //it is ok to call before declaration
function addNum(num){
    return num+1
}

console.log(addTwo(2)); //error since addTwo is an expression declared later
const addTwo = function(num){ //expression so powerful
    return num+2
}
