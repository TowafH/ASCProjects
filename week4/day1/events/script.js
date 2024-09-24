// 1) select the element you are interested in/ want to make interactive
let mainButton = document.getElementById("mainButton");
//let mainButton = document.querySelector("#mainButton");
let allBoxes = document.querySelectorAll(".box");
//let allBoxes = document.getElementsByClassName("box");


// 2) define a function to list all the changes we want to make on the page
function changeBG(){
    let colors = ["pink", "blue", "red"];
    let pick = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[pick];
}

function changeColor(){
    let randomHue = Math.floor(Math.random()*360);
    //this turns into the value that called the .addEventListener
    this.style.backgroundColor = "hsl("+randomHue + ", 100%, 50%)";
}

function changeColorBack(){
    //**this** --> **currentBox**.style.backgroundColor = "white";
        this.style.backgroundColor = "white";
}

// 3) Have JS listen in on certain events, then apply the changes we have defined in our function
mainButton.addEventListener("click", changeBG);
for (let i=0; i < allBoxes.length; i++){
    let currentBox = allBoxes[i];
    currentBox.addEventListener("mouseover", changeColor);
    currentBox.addEventListener("mouseout", changeColorBack);
}