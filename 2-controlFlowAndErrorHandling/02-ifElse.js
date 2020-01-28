let weather = 30;

if(weather < 50){
    console.log("Wear a jacket");
} 
else{
    console.log("You dont need a jacket");
}

//challenge

let name = 'Tristan';

if(name == 'Tristan'){
    console.log('Hello my name is ' + name);
}
else{
    console.log('Hello, is your name ' + name + '?');
}

if(name == 'Tristan'){
    console.log(`Hello my name is ${name}.`);
}
else{
    console.log(`Hello, is your name ${name}?`);
}


//bronze challenge 
 let name = 'zAchARy';

 if(name[0] == name[0].toUpperCase()){
     console.log(name);
 }
 else{
     console.log('Hey, this isnt written correctly');
 }

 //silver challenge

 if(name[0] == name[0].toUpperCase()){
     console.log(name[0]);
 }
 else{
     console.log(name.slice(1,7).toLowerCase());
 }

 //gold challenge

 if(name[0] == name[0].toUpperCase()){
     let isUpperCase = name[0] + name.slice(1,7).toLowerCase();
     console.log(isUpperCase);
 }
 else{
     let isNotUpperCase = name[0].toUpperCase() + name.slice(1,7).toLowerCase();
     console.log(isNotUpperCase);
 }

 //challenge2

 let age = 19;

 if(age <= 17){
     console.log('Sorry, youre too young to do anything.');
 }
 else if(age >= 18 && age < 21){
     console.log('You can vote!');
 }
 else if(age >= 21 && age < 25){
     console.log('you can drink!');
 }
 else if(age >= 25){
     console.log('you can rent a car!');
 }
