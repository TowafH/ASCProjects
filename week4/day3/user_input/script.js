// Select Elements for DOM Manipulation
let inputBox = document.getElementById("inputBox");
let inputBtn = document.getElementById("inputBtn");
let mainDiv = document.getElementById("mainDiv");

// Create a Function for the Event Listener
function updateColors(event){

    //Stops the page from Refreshing / preventDefault();
    event.preventDefault();

    // Grab the userInput --> Store it in a Variable
    let userInput = inputBox.value; //Grabs the Text within the inputBox
    document.body.style.backgroundColor = userInput;

    // innerText - used when on a SPECIFIC Element, modify the entire text
    // innerHTML - refers to all the Children within the element, insert/override nested eleents
    mainDiv.innerHTML = userInput

}


// Create Event Listener for the Button
inputBtn.addEventListener("click", updateColors)