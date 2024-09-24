// Select Elements
let dropdownMenu = document.getElementById("dropdown");
let submitBtn = document.getElementById("submitBtn");
let image = document.getElementById("instructorImg");
let mainDiv = document.getElementById("mainDiv");

// Functions

function showPokemon(event){
    //Stop page from Refreshing
    event.preventDefault();

    // Grab userInput
    let userInput = dropdownMenu.value; 

    // Display the Image with conditonals
    let src;

    if (userInput == "Julie"){
        src = "julie.png";
    } else if (userInput == "Srabon") {
        src = "srabon.png";
    } else {
        src = "rasul.png"
    }

    // Updates the Image on the page
    image.src = src; 
}

// addEventListener
submitBtn.addEventListener("click", showPokemon);