function mash(){
    let house = getHome();
    let travelCount = getTravelCount();
    let pet = getPet();
    let food = getFood();
    let college = getCollege()
    if (house == "Cave" && pet == "Spider" && food == "Spinach" && college == "Monsters University"){
        console.log("You got really unlucky!")
        console.log(" ")
    }
    return `You will live in a ${house} and travel to ${travelCount} countries with your pet ${pet}! You will eat ${food} and enroll in ${college}`;
    
}

let mashResult = mash(); //Value from mash() function
console.log(mashResult);

//Function to generate a random integer
function randNumGenerator(randNum){
    let decimalGenerator = Math.random() * randNum;
    let floorRandDecimal = Math.floor(decimalGenerator);
    return floorRandDecimal
}

//Function to retrieve the home value
function getHome(){
    let userHouseInput = process.argv[2]; //User input value of 2
    let getHomeArray = ["Mansion", "Castle", "Shack", "House", "Cave"]; 
    if (userHouseInput == true){ 
    getHomeArray.push(userHouseInput);
    } //If the user DID input a value, .push the value into the Array


    let randNum = randNumGenerator(getHomeArray.length); //Generate a random # to output from the getHomeArray, according to its length
    return getHomeArray[randNum]; //Generated randomInteger will select one of the items in the getHomeArray


    //console.log(getHomeArray) Display the Updated Array
    //console.log(randNum) Which # in the Array is being Generated
    //console.log("Generated Random #:"", randNum);

}

function getTravelCount(){
    let randNum = randNumGenerator(101); //Any random value using the randNumGenerator function
    return randNum; //makes the randNum value equivalent to what was retrieved from the above statement
}

function getPet(){
    let userPetInput = process.argv[3]; //User input value of 3
    let randomPetsArray = ["Cat", "Dog", "Hamster", "Pikachu", "Spider"];
    let random50Chance = Math.random() < 0.5; //Create a 50% chance variable

    if (random50Chance && userPetInput == true){
        return userPetInput; //Checks if the user did input a value to run the random50Chance to output their value or the values in the Array
    } else {
        let randNum = randNumGenerator(randomPetsArray.length);
        return randomPetsArray[randNum]; //If the user didn't input a value, a RandomInteger will be generated to pick one of the options, which is found using randNum here
    }
}

function getFood(){
    let userFoodInput = process.argv[4];
    let randomFoodArray = ["Pizza", "Bread", "Apple", "a Philly Cheesesteak", "Spinach"];

    if (userFoodInput == true){
        return userFoodInput;
    } else {
        let randNum = randNumGenerator(randomFoodArray.length);
        return randomFoodArray[randNum];
    }
}

function getCollege(){
    let userCollegeInput = process.argv[5];
    let randomCollegeArray = ["Harvard", "MIT", "NYU", "Cornell", "Monsters University"];

    if (userCollegeInput == true){
        return userCollegeInput;
    } else {
        let randNum = randNumGenerator(randomCollegeArray.length);
        return randomCollegeArray[randNum];
    }
}
