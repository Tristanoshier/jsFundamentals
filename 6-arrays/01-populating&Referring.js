/*
    - arrays are containers that hold a list of items 
    - denoted by square brackets []
    - can hold multiple datatypes
    - each item, regardless of datatype, is separated by a comma
*/

let list = ['orange', 'banana', 'apple'];
console.log(list[1]);

/*
    - when calling an array, we can append square brackets onto the end of our array with the index number we want to 
      reference. This is called square bracket notation
    - javaScript counts starting at 0
*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true,['Kris', 'Taylor', 'Will']];
console.log(typeof students);
console.log(students instanceof Array); // instanceof operator is used to check the type of a variable we're working with
console.log(students[2]);

//challenge
let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true,['Kris', 'Taylor', 'Will']];
let name = students[6][2];
console.log(`Hello ${name}!`);

