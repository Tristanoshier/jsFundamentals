/*
    - great for counting key/value pairs in an object. Properties in an object 
    are what is called enumerable
        - for in loops will iterate over an objects enumerable properies
*/

let student = {
    name: "Tristan",
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

console.log(student.degree); // dot notation

for(let item in student){
    console.log(student[item]); // object bracket notation
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

console.log(dogArray[1]); // bracket notation

for (dog in dogArray) {
    console.log(dogArray[dog]);
}

// Challenge

let name = 'tRISTAN';
let capName;

for(let i in name){
    if(i == 0){
        capName = name[i].toUpperCase();
    }else{
        capName += name[i].toLowerCase();
    }
}
console.log(capName);