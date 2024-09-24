/* 
let randDecimal = Math.random();
// 0 - .99999 (exclusive of 1, inclusive of 0)

console.log("randDecimal:", randDecimal); 
*/


/* 
let randDecimal = Math.random(); // 0 - 0.9999
let randNum = randDecimal * 5; // 0-4.99 (exclusive of 5)

console.log("randNum:", randNum)
*/



let randDecimal = Math.random();
let randNum = randDecimal *5; // ANY VALUE FROM 0 - 4.9999
let randInt = Math.floor(randNum); // 4.3, 3.99 - Gets rid of the decimals  

console.log("randInt:", randInt);

//               0             1          2        3              4                        
let basicArr = ["Watermelon", "Cupcake", "Pizza", "Superheroes", "Tacos"];