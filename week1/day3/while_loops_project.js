//Part 1
/*
let num = process.argv[2];

while (num > 0){
    console.log(num);
    num -= 1;
}
*/

//Part 2

/* Q1 
- I think the while loop will iterate three times.
It will go from 0 to 2, 2 to 4, 4 to 6.
It must stop after exceeding the threshold of 5.
*/

/* Q2
- I think it will print infinitely becaus both values are being incremented.
B will always have a higher value, starting at 5 while a starts at 0.
*/

/* Q3 
Little DD will be printed 5 times onto the console.
A will slowly increment until it reaches 10. 
10 is not less than 10. This ends the loop.

a2 b6
a4 b7
a6 b8
a8 b9
a10 b10
*/

/* Q4 

Little DD will be printed 3 times onto the console.
The If statement with 4 % 2 will turn it into 0, which
runs break; Ending the loop

c10 1
c7 2
c4 3 --> 4 % 2 = 0 (TRUE)

*/


/* Q5
let num = 0;

while (num > 10){
    
    console.log("Little Donald Trump");
    num++
    //break; must be moved to the end
    break;
}
*/


//PART 3a

let randomNumber1 = 1000;
let randomNumber2 = 1000;
let tryAttempts = 0;

while (randomNumber1 > 0 && randomNumber2 > 0) {
    //Generate Decimals
    let randDecimal1 = Math.random() * 11;
    let randDecimal2 = Math.random() * 11;
    //Floor into Integers
    let randomNumber1 = Math.floor(randDecimal1); 
    let randomNumber2 = Math.floor(randDecimal2);

    tryAttempts += 1;
    //Display in Console
    console.log(`Try #${tryAttempts}`, "- 1st Random#:", randomNumber1, "2nd Random#:", randomNumber2);

    //Condtional to end the loop
    if (randomNumber1 == randomNumber2){
    console.log("Same Random# on", `Try #${tryAttempts}!`, "Ending the loop.")
    break;
    }
}