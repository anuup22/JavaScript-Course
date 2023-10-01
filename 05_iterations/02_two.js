// for in loop

const myObj = {
    js: "JavaScript",
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift IOS wala'
}

for(const key in myObj){
    console.log(key, ':', myObj[key]);
}