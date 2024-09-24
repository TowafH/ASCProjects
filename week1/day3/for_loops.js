//              0            1             2           3          4                  
let pokemon = ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Mewtwo'];

//   Start      End   Step
for (let i = 0; i < pokemon.length; i++) {
    //Repeat any line of code
    console.log(pokemon[i] + "!");
 }
 
let scores = [83, 46, 78, 100];
let total = 0;

 for (let n = 0; n < scores.length; n++){
    console.log(scores[n]);
    total += scores[n];
 }

 console.log("Total:", total);
 console.log("Average:", total/scores.length);

 //While Loop
 /* 

 Allows coders to implement INFINITY
let i = 0;

while(i < 5){

i++
}

 */