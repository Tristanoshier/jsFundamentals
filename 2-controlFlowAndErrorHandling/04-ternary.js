/*
    - a ternary is a shortcut, or shorthand way of writing an if/else statement
    - requires the default or catch all (else)
*/

let num = 6;

// Ternary

(num > 0) ? console.log('yes') : console.log('no');

// if/else

if (num > 0){
    console.log('yes');
} else{
    console.log('no');
}

let num = 6;

//Ternary
(num == 0) ? console.log('working') : (num < 0) ? console.log('not working') : console.log('still not working');

// else if

if(num == 0){
    console.log('working');
} else if (num < 0){
    console.log('Not working');
}else{
    console.log('still not working');
}

//challenge

let age  = 19;

(age >= 25) ? console.log("yay you can rent a car") 
    : (age >= 21) ? console.log("yay you can drink") 
    : (age >= 18) ? console.log("yay you can vote")
    : console.log("Sorry, youre too young to do anything fun")