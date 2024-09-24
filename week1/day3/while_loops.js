let word = "Google";

let num = 0;

// conditon that evaluates to true to enter the loop and false to stop
while (num < 1000) {
    
    //what is the steps I want to repeat
    console.log(num, word);

    num += 1; //Accumulator Variable OR Count Controlled Group


    //num++;
    //num = num + 1

    // Break the repitition before the conditon evaluates to false
    if (num == 5) {
        console.log("Stop")
        break; // Stops the loop
        console.log("Will this Print?")
    }
}

console.log("Program End")

// Accumulator variable

// let num = 0; start

/* while (){     //stop
console.log(num, "hello");

num +1; //step
}
*/