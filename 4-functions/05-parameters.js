function hi(name){
    console.log(`Hello, ${name}.`);
}

hi('Tristan');

function tristan(ticket){
    console.log(`I exchanged my ticket for a ${ticket}`);
}

tristan('sandwich');


function counter(number){
    for(number; number <= 10; number++){
        console.log(number);
    }
}

counter(0);


// challenge

function name(firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is  ${fullName}.`);
}

name('Tristan', 'Oshier');

