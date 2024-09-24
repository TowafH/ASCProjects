let ballArray = [];

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 5; i++) {
        //                   random xPos    set yPos   set redValue   set greenValue     set blueValue     random speedValue
        let temp = new Ball(random(0, 500),   250,      0,                255,             0,              random(2,5));
        ballArray.push(temp);

        //temp generates a green circle using new Ball(.....)
        //temp is then pushed into the ballArray to be stored
    }

 }
 
 
 function draw() {
    background(0);

    for (let i = 0; i < ballArray.length; i++){
            //Each iteration, it grabs a value from ballArray to output on the Canvas
        fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue); //colorValue
        ellipse(ballArray[i].xPos, ballArray[i].yPos, 50, 50); // x,y Pos

        ballArray[i].yPos += ballArray[i].speedValue; //Add "speed" to the yPos with the randomly generated speedValue

        if (ballArray[i].yPos > 525) {
            ballArray[i].yPos = -25;
            //Checks if the ball has left the canvas
        }
    }
 }
 
 
 class Ball {
    constructor(x, y, r, g, b, speed) {
        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.speedValue = speed;
    }
 }
 