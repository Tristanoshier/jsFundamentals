/*
    - a falsy value is a value that is considered false when encountered in a boolean context.
    1. 0
    2. false
    3. "", '', ``
    4. null
    5. undefined
    6. NaN (not a number)
*/

let isOn = true;

if (isOn == true){
    console.log("The light is on!");
}

if(isOn){
    console.log("The light is still on!");
}

isOn = false;

if(!isOn){
    console.log("The light is off!");
}

let weather = 30;

if(weather < 50){
    console.log("Wear a jacket!");
}
