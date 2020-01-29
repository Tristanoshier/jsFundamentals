let name = () => {
    return 'Tristan';
}
let myNameIs = name();
console.log(myNameIs);

// challenge

let tipCalculator = total => {
    let tip = total * 0.2;
    return tip.toFixed(2);
}
let final = tipCalculator(30.24);
console.log(`You should tip $${final}`);

//faster way 
let tipCalc = bill => bill * 0.2;
let totalTip = tipCalc(19.84);
console.log(totalTip);
