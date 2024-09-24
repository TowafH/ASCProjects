// (false && true) && true --> false b/c AND (&&)

/* true || (true * !true) --> True b/c OR (||)
The ! makes the true become false    */

//   !false && (!true || _______ ) = True  --> true goes in the blank. 

// (true && _______ ) && (!false || false) = False --> False goes in the blank


//Part 2

let userInput = process.argv[2];

if (userInput == " "){
    console.log("Empty Response");
} else if (userInput > 100 || userInput < 0){
    console.log("Invalid Input - Score out of Range");
} else if (userInput >= 90 && userInput <= 100) {
    console.log("Congrats! Keep it up!");
} else if (userInput >= 80 && userInput <= 89.9999){
    console.log("Good Work. Keep at it.");
} else if (userInput >= 70 && userInput <= 79.9999){
    console.log("Please try harder");
} else if (userInput >= 60 && userInput <= 69.9999){
    console.log("Please try harder");
} else if (userInput < 60){
    console.log("Come see me :(");
} else {
    console.log("Invalid Input Type");
}