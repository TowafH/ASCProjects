// declare a variable for an array
let myArray = [];
//                   0           1            2            3          4     
let pokemonArray = ["Venusaur", "Charizard", "Blastoise", "Pikachu", "Eevee"];

// acessing values
//console.log(pokemonArray[3]);

// change or reassign values within an array
//console.log("Before:", pokemonArray);
pokemonArray[2] = 1;
//console.log("After", pokemonArray);

// arrays can have mixe types
let mixArray = ["america", 7.5, true];

//console.log("Mixed", mixArray)

// .length - array

//console.log("Mixed Array Length", mixArray.length);

// ########################## Array Methods #############################

//ad an item to the end of the array

mixArray.push("Mewtwo");

// remove the last item of an array
mixArray.pop();

// change the order of the values using reverse()
mixArray.reverse();

console.log(mixArray);

// .sort() allows me to sort my array
let letters = ["F", "V", "A", "M"];
letters.sort();
console.log(letters)

