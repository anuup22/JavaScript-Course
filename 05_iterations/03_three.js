// for each loop

const arr = [1, 2, 3, 4, 5]
arr.forEach(function (iter){ //parameter is a func without name
    console.log(iter);
})

arr.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const coding = [
    {
        codeLang: 'C++',
        fileExt: 'cpp'
    },
    {
        codeLang: 'Python',
        fileExt: 'py'
    },
    {
        codeLang: 'JavaScript',
        fileExt: 'js'        
    }
]
//imp for databases
coding.forEach( (item) => {
    console.log(item.codeLang);
    console.log(item.fileExt);
})