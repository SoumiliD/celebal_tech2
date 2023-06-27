//function
// function myFunc ( a, b)
// {
//     return a+b;
// }
// myFunc(3, 5) //8

//arrow function
// const myFunc = ()=>
// {
//     return "hello there"

// }
// val = myFunc();
// console.log(val)

//arrow function with parameter
// const myFunc = (val)=>
// {
//     return ("hello there"+" " + val);

// }
// val = myFunc("Soumili");
// console.log(val)

// file system module to perform file operations
// const fs = require('fs');
// var jsonData = '{"cars":[{"number":"001","model":"Mercedes"},{"number":"002","model":"BMW"}]}';
// var jsonObj = JSON.parse(jsonData);
// var jsonContent = JSON.stringify(jsonObj);
// fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
//     if (err) {
//         console.log("An error occured while writing JSON Object to File.");
//         return console.log(err);
//     }
//     console.log("JSON file has been saved.");
// });


// const fs = require('fs');
// fs.readFile('output.json', (err, data) => {
//     if (err) throw err;
//     let car = JSON.parse(data);
//     console.log(car);
// });
// console.log('This is after the read call');


