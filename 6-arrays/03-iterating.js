/* 
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same thing as a for loop or for of Loop - both iterate over properties in an array
*/


let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}

food.forEach(foodItem => console.log(foodItem));

food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
})

food.forEach(function(foodItem, index){;
console.log(index);
})

//challenge

let movies = ['A Clockwork Orange', '2001: A Space Odessy', 'Full Metal Jacket', 'Eyes Wide Shut'];
movies.push('Dr. Strangelove');
movies.splice(1, 1, 'The Shining');
movies.forEach(movie => console.log(movie));
