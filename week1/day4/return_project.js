function combineStrings(s1, s2){
    //return s1 + s2;
}

let s1 = combineStrings("ABC", "DEF");
let s2 = combineStrings("poke", "mon");
let s3 = combineStrings("friend", "ship");
let s4 = combineStrings("1", "2");


//console.log(s1);
//console.log(s2);
//console.log(s3);
//console.log(s4);

//Part 2

/*
Program #1 - 

I think that the function will output 3 arrays, which include values from a1, a2, and a3 respectively

["a", "b", "c"]
["panda", "bee", "squirrel"]
[55, 100, -7]
*/




/*
Program #2 - 

I think the function will output these values in this order:
1
5
0

num++ cannot run after return
*/



/*
Program #3 - 

I think the function will output

2.5
15
5
*/

/*
function checkAnswer(num1, num2, operator, answer){
if (operator == "+") {
    return (num1 + num2 == answer);
  } else if (operator == "-") {
    return (num1 - num2 == answer);
  } else {
    return false;
  }
}

let b1 = checkAnswer(3, 9, "+", 8);
let b2 = checkAnswer(9, 8, "+", 15);
let b3 = checkAnswer(5, 4, "-", 1);
let b4 = checkAnswer(0, 1, "-", -2);
*/

//console.log(b1);
//console.log(b2);
//console.log(b3);
//console.log(b4);

function oddNumberCatcher(array1){
    for (i = 0; i < array1.length; i++){
        if (array1[i] % 2 != 0){
            return i;
        }  
    }
    return -1
}

let array1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
//console.log(array1);

