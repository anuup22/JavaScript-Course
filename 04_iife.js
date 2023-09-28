// Immediately Invoked Function Expressions (IIFE)

//named iife
(function chai(){
    console.log("Heyy :)");
})(); 

// chai() //invoked
// ()();-> (function def)(call)  invoked immediately ; is important

//unnamed iife
( (name) => {
    console.log(`${name}, Heyy once again :)`);
})("Anup");
//parameter passing