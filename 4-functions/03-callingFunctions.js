function hi(){
    console.log('hello');
}

hi;
hi();
console.log(hi);
console.log(hi());

// as soon as our parser sees that there is a function invocation, that happens immediately.

// challenge 1
function numbersOneTen() {
    for (let i = 1; i <= 10; i++){
        console.log(i);
    } 
}
numbersOneTen();

// challenge 2
let arr = ['This', 'is', 'really', 'cool'];

function list(){
    for(a of arr){
        console.log(a);
    }
}
list();
