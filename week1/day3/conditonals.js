
if (5 < 10) {
    //console.log("la di dum");
 }
 
 if (1 == 2) {
  //console.log("hello");
 }


 //ask the user for a number 
 let userGuess = process.argv[2];
 let answer = 5;
 let score = 0;
/*
console.log(typeof(userGuess), typeof(answer));
console.log(userGuess == answer);
*/

 // every if-statement is an INDEPENDENT question
 // use a conditonal statement
 if (userGuess == answer){
    console.log("Correct!");
    score += 5
 } else if (userGuess < answer){
    console.log("Too Low");
    score -= 1
 }  else {
    console.log("Too High");
    score -= 1;
 }

 console.log(score);

