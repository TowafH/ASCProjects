//Changes the h1 title

//let mainHeader = document.getElementById("mainTitle");
let mainHeader = document.querySelector("#mainTitle");
mainHeader.innerText = "Coin Flipper 3000";

//Select the DIV
let mainDiv = document.querySelector("div");
mainDiv.style.border = "8px solid black"

//Select all the <p>

let allP = document.getElementsByClassName("description");
//let allP = document.querySelectorAll(".description") //Doesn't know it's a class, .getElementByClassName already knows

console.log(allP);

for (let pos = 0; pos < allP.length; pos++){
    //console.log(pos);
    allP[pos].style.color = "blue";
    allP[pos].style.fontWeight = "bold";
}

// Flip the Coin
let coin = document.getElementById("coin");

let flip = Math.floor(Math.random() * 2); // Generates a rand# (0-1);
console.log(flip);

if (flip == 0) {
    coin.src = "heads.png";
} else {
    coin.src = "tails.png"
}