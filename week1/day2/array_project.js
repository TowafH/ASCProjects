let letters = ["A", "B", "C", "D", "E"];

//console.log(letters[1])
//console.log(letters[3])
//console.log(letters[5])

let days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

//console.log(days[0]);
//console.log(days[6]);
//console.log(days.length);
//console.log(days[days.length]);
//console.log(days[days.length - 1]);

//let myArray = ["Do", "Re", "mi", "Fa", "So"];

//console.log(myArray);

//myArray.length = 2;
//console.log(myArray);

//myArray.length = 0;
//console.log(myArray);



//PART 2
let scores = [85, 93, 65, 65, 92, 81, 93];

// Adding up the averages
let scoreTotals = scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] + scores[6];

console.log(`Average: ${scoreTotals / scores.length}`);



// ############# PART 3 ###############


//Reverse - T#1
let myArrayR = ["a", "b", "c", "d"];

//console.log("Before:", myArrayR);
//console.log("After:", myArrayR.reverse());


// Reverse + Push - T#2
let myArrayRP = ["a", "b", "c", "d"];

//console.log("Before:", myArrayRP);
//console.log("After:", myArrayRP.push(1, 2));


//Pop - T#3
let myArrayP = ["a", "b", "c", "d"];

//console.log("Before:", myArrayP);
myArrayP.pop()
//console.log("After:", myArrayP);



// Pop + Splice - T#4
let myArrayS = ["a", "b", "c", "d"];

//console.log("Before:", myArrayS);
myArrayS.pop();
myArrayS.splice(1, 2, "c", "d", "e")
//console.log("After:", myArrayS);



// Pop + PushX2 + Reverse - T#5

let myArrayPPR = ["a", "b", "c", "d"];

console.log("Before:", myArrayPPR);
myArrayPPR.pop();
myArrayPPR.push("e", "f")
myArrayPPR.reverse()
console.log("Aftr:", myArrayPPR)