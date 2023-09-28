/*
const user = {
    userName: "Anup",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website :)`); //this-> refers current context
        console.log(this); //this-> points to entire object
    }
}
user.welcomeMessage()
user.userName = "Samir"
user.welcomeMessage()

console.log(this); //empty object //window if running in console

function temp(){
    let userName = "Anup"
    console.log(this.userName); //undefined (this-> works only for objects context)
}
temp()
*/

function exp(){ //way-1 to declare function

}
const exp = function(){ //way-2

}
const exp = (num1, num2) => { //way-3 (explicit return)
    return num1+num2
}
const exp = (num1, num2) => num1+num2 //way-4 (implicit return)