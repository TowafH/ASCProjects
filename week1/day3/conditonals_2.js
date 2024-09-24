// Logical Operators

// True OR False --> True Expression
if (1 < 2 || 3 == 5){
    console.log("This expression evaluates to true, so you will see this")
}

//  True AND False --> False Expression
if (1 < 2 && 3 == 5){
    console.log("This expression evaluates to false, so you dont see this")
}

// Conditonals can  be used  to check whether a value has been assigned or not

let meme;

if (meme){
    console.log("Meme is defined")
} 
else {
    console.log(meme, "meme is not defined")
}