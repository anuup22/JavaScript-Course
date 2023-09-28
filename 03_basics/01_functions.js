function sayMyName() {
    console.log("Hello");
    console.log("A");
    console.log("n");
    console.log("u");
    console.log("p");
}
// sayMyName()

function addNum(number1, number2){
    return number1+number2;
}
console.log("Addition is: ", addNum(1, 2));

function loginUserMessage(userName) {
    if(userName === undefined){
        console.log("Please enter a userName :(");
        return
    }
    return `${userName} just logged-in`;
}
console.log(loginUserMessage("Anup"));

//rest operator (...)
function calculateCartPrice(...num1){ //all parameters will be put into num1 array
    return num1;
}
console.log(calculateCartPrice(1,2,3,4));