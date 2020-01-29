/*
    - forOf loops look at the iterable properties on an array
    - cant use forOf loops on objects because objects are enumerable, not iterable (example below)
*/

// let student = {
//     name: 'Tristan',
//     awesome: true,
//     degree: 'JavaScript',
//     week: 1
// }

// for(let item of student){
//     console.log(item);
// }

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

for(let dog of dogArray){
    console.log(dog, 'goes bark');
}