let scubaImg;
let bg;

function preload(){
    scubaImg = loadImage("images/scuba.png");
    bg = loadImage("images/background.png")
}



function setup() {
    createCanvas(500, 800);
    noStroke();

    rectMode(CENTER);
}

function draw() {
    //Completion Screen

    background(135,206,235);
    image(bg, 0, 0, 500, 800);
    //Scuba Img
image(scubaImg, 235, 10, 50, 50);
    textSize(22);
    stroke(1);
    text("Ocean Crew", 345, 120, 300, 100);

    //Seperation line from Top
    fill(255)
rect(100, 100, 800, 10);

    //Box for Level Completed
    fill(255);
rect(250, 200, 300, 100);

    //Text within Level Completed Box
    fill(0);
    textSize(30);
    stroke(1);
    text("Level Completed!!", 280, 240, 300, 100);

    //Box for Congratulations
    fill(255);
rect(250, 350, 300, 100);

    //Text within Congratulations Box
    fill(0);
    textSize(30);
    stroke(1);
    text("Congratulations!", 280, 340, 300, 50);
    textSize(25);
    text("You saved the Ocean", 275, 380, 300, 30);

}