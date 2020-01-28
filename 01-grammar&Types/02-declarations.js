/*
    - a variable is a named container for storing data
    - we name variables so that we can refer to them again
*/

let a = 2;

    let      b      =       1;
/*   (1)    (2)    (3)      (4)

1. javascript keyword
2. variable name
3. assignment operator
4. variable value
*/


console.log(a + b);

/*
    notes on variables:
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the above characters, but they can't come first
        - javascript is case sensitive = 'hello' & 'Hello' are two seperate variables
        - no spaces allowed in varible names
        - camelCase is the best practice for naming variables with multiple words
            -this helps with readability   
*/

/*
     var, let, const:
        - var: 'old' keyword for varibles in javascript

        - let: 'new' keyword introduced for varibles in ES6
        (newer version of javascript)

        - const: unchangeable variable once declared
*/

/*
    declaration  vs initialization:
        - declarations are the LEFT SIDE of a variable
            - let x 
            - declarations are on the left side of the assignment operator (=)

        -initializations are the RIGHT SIDE of the variable
            - it sets the value of the variable
            - the value we initialize our variables as is what is on the right side
              of the assignment operator (=)            
*/

let x;
console.log('Declaration:', x); //Declaration: undefined

x = 10;
console.log('Initialization:', x); //initialization: 10

x = 100;
console.log('Reinitialization:', x);

let y = 'hello';
console.log(x, y);

const today = 'Great';
console.log(today);

today = 'Wonderful';
console.log(today); //throws error because today is a const




