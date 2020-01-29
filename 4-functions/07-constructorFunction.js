

//(1)     (2)          (3)
function Person(name, age, canVote){
//  (4)   (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//            (7)   (8)
let person4 = new Person('Tristan', 19, true);
let person5 = new Person('Doug', 1, false);
console.log(person4);
console.log(person5);

/*
    1. the function keyword
    2. the function name. For constructor functions, the name of the function should be capitalized
    3. the parameters. These will be the values for the keys in our object once a new 'Person' is created
    4. the 'this' keyword refers back to whatever called it, or whatever activates it. In this case, '.this' refers
       back to 'Person'
    5. the keys of the new object we're creating.
    6. the argument we pass through our function call will resolve as the values 
    7 & 8. the new keyword creates a new instance of our 'Person' function, with the values we pass into that function when 
       invoking it
*/