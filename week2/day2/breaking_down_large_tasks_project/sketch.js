//Step 1 - Create a setup() function to create the Canvas with a black Background. 
//Step 2 - Create variables & random for the (r,g,b) in setup()
//Step 3 - Call (r,g,b) with fill in setup()
//Step 4 - Include 3 square functions in setup(); after calling the fill(r,g,b);
//Step 5 - Create a draw() function to allow for mouse movement

//Global variable
let r,g,b;
let r2,g2,b2;
//Generate a random RGB Value
function setup(){
    createCanvas(500,500); //Creates a blank Canvas
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);

    r2 = random(0,255);
    g2 = random(0,255);
    b2 = random(0,255);

    r3 = random(0,255);
    g3 = random(0,255);
    b3 = random(0,255);
}


function draw(){
    background(0, 0, 0); //Clears the screen to give moving illusion
    fill(r,g,b);
    rect(mouseX, 100, 75); //Creates the 1st Square, movableX
    fill(r2,g2,b2);
    rect(mouseX, 200, 75); //Creates the 2nd square, movableX
    fill(r3,g3,b3);
    rect(mouseX, 300, 75); //Creates the 3rd square, movableX

}

function mouseClicked(){
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);

    r2 = random(0,255);
    g2 = random(0,255);
    b2 = random(0,255);

    r3 = random(0,255);
    g3 = random(0,255);
    b3 = random(0,255);
}
