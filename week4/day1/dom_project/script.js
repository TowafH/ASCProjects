// Add your code to this file

//Re-style the Body
let bodySelector = document.querySelector("body");
bodySelector.style.backgroundColor = "#00008B";

// Align the h2 & Change the h2 content
let h2Selector = document.querySelector("h2");
h2Selector.style.textAlign = "center";
h2Selector.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";

// Add a dotted border around ALL images using a for loop
let startersImage = document.querySelectorAll("img"); //querySelectorAll will return an ARRAY, requires a for-loop

for (style = 0; style < startersImage.length; style++){
    startersImage[style].style.border = "dotted orange";
}

//Add style to all Headings of Pokemon Boxes
let pokemonNames = document.getElementsByClassName("pokemon_names");

for (names = 0; names < pokemonNames.length; names++){
    pokemonNames[names].style.color = "#FFF2A7";
}

//Restyle bulbasaur container 
let bulbasaurContainer = document.getElementById("bulbasaur_container")
bulbasaurContainer.style.backgroundColor = "#388E8E"

//Restyle footer
let footerContent = document.querySelector("footer")
footerContent.innerHTML = "All Star Code - DOM Project"
footerContent.style.fontSize = "30px"
footerContent.innerText.style.borderStyle = "none solid none solid"