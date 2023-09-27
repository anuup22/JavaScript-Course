//destructuring of objects  //(arrays) will see later

const course = {
    courseName: "OOP",
    price: 999,
    courseInstructor: "Anup"
}
console.log(course.courseInstructor); //for single object

//ranaming (de-structuring)  { } syntax is used while destructuring
//way-1
const {courseInstructor} = course
console.log(courseInstructor);

//way-2 
const {courseInstructor: instructor} = course
console.log(instructor);

//JSON (object without name with different declaration method)
/*
{
    "name": "Anup",
    "courseName": "JavaScript",
    "price": "free"
}
*/
[
    {},
    {},
    {}
]

// let api = "https://randomuser.me/api"