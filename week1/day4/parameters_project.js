function evenOrOdd(num){
    console.log("Your number is:", num );
    if (num % 2 == 0){
        console.log (num, "is even");
    } else {
        console.log(num, "is odd")
    }
}

/*
evenOrOdd(7);
evenOrOdd(6872);
evenOrOdd(-5);
evenOrOdd(0);
*/

function divisor(num1, num2){
    if(num1 % num2 == 0){
        console.log(num1, "is divisble by", num2);
    } else {
        console.log(num1, "is NOT divisble by", num2);
    }
}

/*
divisor(9, 3);
divisor(27, 5);
divisor(10001, 10);
divisor(598, 13);
*/

function distanceCalculator(name1, x1, y1, name2, x2, y2){

    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 );

    console.log(`${name1} and ${name2} are ${distance} meter(s) apart.`)
}

/*
distanceCalculator("Ronaldo", 3.28, 2.26, "Messi", 3.92, 3);
distanceCalculator("You", 4.00, 11.00, "Me", 6.00, 4.00);
*/




function arrayHandler(myArray){
    for (i = 0; i < myArray.length; i++){
        if (typeof myArray[i] === "string"){
            console.log(myArray[i]);
        }
    }
}

/*
arrayHandler([1, "a", 2, "b", 3, "c", 4, "d"])
*/


function numberChecker(myArray2){
    for (i = 0; i < myArray2.length; i++){
        if (typeof myArray2[i] === "number"){
            console.log(myArray2[i]);
        }
    }

}

numberChecker([10, "hello", 5, "world", 2, true]);