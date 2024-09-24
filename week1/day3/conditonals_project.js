// Program #1
/* I predict that the output will result in 
-"@"
-"#"
This is because the value of 5 makes the 
2nd and 3rd conditonal if-statements TRUE.
These are independent if-statments.
*/

//Program #2
/* I predict that it will output in
-"@*

The 2nd else-if statement results in TRUE and avoids
the rest of the else-if statements.

/

//Program #3
/* I predict that the output will be
-"@"
-"^"

There are 2 Independent if-statements. 
In the 1st if-statement, the 1st else-if statement 
results in TRUE and negates the rest.

In the 2nd if-statement, the conditonal results in false.
Skipping to the else, which runs "^".
*/

//Program #4
/* I predict that the output will be
10

*/

//Program #5
/* I predict that the output will be 

-"true blocks are excuted"

/*



//Part 2
let userGuess = process.argv[2];
let randomDecimal = Math.random() * 101;
let randomNumber = Math.floor(randomDecimal);

if (userGuess == randomNumber){
    console.log("You guessed:", userGuess);
    console.log("Generated Random #:", randomNumber);
    console.log("You guessed Right!!");
} else if (userGuess > randomNumber){
    console.log("You guessed:", userGuess);
    console.log("Generated Random #:", randomNumber);
    console.log("Your guess was too high!");
} else if (userGuess < randomNumber){
    console.log("You guessed:", userGuess);
    console.log("Generated Random #:", randomNumber);
    console.log("Your guess was too low!");
} 

*/


//Part 3

let userInput = process.argv[2];
let score = 0;

if(userInput == "A"){
    score -= 1;
    console.log("Wrong Answer :(");
    console.log("Final Score:", score);
} else if (userInput == "B") {
    score -= 1;
    console.log("Wrong Answer :(");
    console.log("Final Score:", score);
} else if (userInput == "C") {
    score += 5;
    console.log("RIGHT ANSWER! WOHOO!!!");
    console.log("Final Score:", score);
} else if (userInput == "D") {
    score -= 50;
    console.log("Bad bad bad...");
    console.log("Final Score:", score);
} else if (userInput == "I.KNOW.THE.SECRET"){
    score += 1000000;
    console.log("Welcome to NIRVANA");
    console.log("Final Score:", score);
} else {
    console.log("Invalid response...");
    console.log("Final Score:", score);
}