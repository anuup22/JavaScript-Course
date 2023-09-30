const month = 2

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");   //without break next block will be executed
        // break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Default section ran")
        break;
}
