function combineString(str1, str2){

    // our parameters and any variables we declare
    // within a function is only accesible by our 
    // program within the curly brackets

    //"local variables"
    let result = str1 + str2;
    //console.log(result);
     return "the result is", result;
}

// main program
let answer, answer2 = combineString("ABC", "DEF");
console.log(answer, answer2);