/*
function setup() {
    createCanvas(500, 500);
    noStroke();
    
    rectMode(CENTER);
 }
 
 
 function draw() {
    background(0);

    fill(255,0,0);
    ellipse(150, 250, 100, 100);
    
    fill(0,255,0);
    ellipse(250, 250, 100, 100);
    
    fill(0,0,255);
    ellipse(350, 250, 100, 100);
 }
 */

let ball1;

 function setup() {
    createCanvas(500, 500);
//  this             .xPos   .yPos    .redValue    .greenValue   .blueValue
    ball1 = new Ball(150,     250,     255,         0,             0);
    //The 'new' keyword is used to create an INSTANCE of a ball1 object
 }
 
 
 function draw() {
    background(0);

    fill(ball1.redValue, ball1.greenValue, ball1.blueValue);
    ellipse(ball1.xPos, ball1.yPos, 100, 100);
 }

 class Ball {
    constructor(x, y, r, g, b){
        this.xPos = x; //when ball1 was Instanciated, x --> 150
        this.yPos = y; //when ball1 was Instanciated, y --> 250
        this.redValue = r; //when ball1 was Instanciated, r --> 255
        this.greenValue = g; //when ball1 was Instanciated, g --> 0
        this.blueValue = b; //when ball1 was Instanciated, b --> 0

        // 'this' became bell1 ---> bell1.xPos
    }
 }