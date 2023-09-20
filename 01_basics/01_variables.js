const accountId = 790019                //unchangable
let accountEmail = "anuup22@google.com" //
var accountPassword = "22114433"        //least used scope problem
accountCity = "Mumbai"                  //can be declared

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

let accountState;

accountEmail = "abc@xyz.com"
accountPassword = "44332211"
accountCity = "Pune"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])