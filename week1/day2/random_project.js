// Assign variables and declare
let randomDecimal1 = Math.random(); // 0 - 0.999
let randomDecimal2 = Math.random();

let randomNumber1 = randomDecimal1*11; // 0 - 10.999
let randomNumber2 = randomDecimal2*11; 

// Turn decimals into whole numbers
let randomInt1 = Math.floor(randomNumber1); // 0 - 10 
let randomInt2 = Math.floor(randomNumber2);

// Create variable for the sum
let sum = randomInt1 + randomInt2

//console.log(`Random Number #1: ${randomInt1}`);
//console.log(`Random Number #2: ${randomInt2}`);
//console.log(`Sum: ${randomInt1} + ${randomInt2} = ${sum}`)


let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];


let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

//generate a random #
let randDecimal1 = Math.random() * days.length; // 0-6.999
let randNum1 = Math.floor(randDecimal1); // Becomes 0-7

let randDecimal2 = Math.random() * reactions.length; //
let randNum2 = Math.floor(randDecimal2);

//select a day
console.log("Days:", days[randNum1]);
console.log("Reactions:", reactions[randNum2]);