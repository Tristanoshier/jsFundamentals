//  (1)     (2)
let hi = () => {
    console.log('hello');
}

/*
    1. all fat arrow functions need to be set to a variable
    2. the fat arrow signifies that this is a function

    - arrow functions are the shorthand way of writing a funciton expression (not declaration)
        -fat arrow functions do not get hoisted sincxe they are funtion expressions 
*/

// CONCISE BODY
let hi = () => console.log('hello'); //return is implicit and happens by default
hi();

// BLOCK BODY
let hi = () => {
    console.log('hello');
    // return keyword must be present inside of a block body arrow function
}
hi();

// CONCISE vs BLOCK
let apples = num => console.log(`There are ${num} apples`);
apples(3);

/*
    - if there are no parameters, we have to have parenthesis ()
    - if there is a single parameter, you can choose to have no parenthesis or to include the parenthesis
    - if there are multiple parameters, you have to have parenthesis ()
*/