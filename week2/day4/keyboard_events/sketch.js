let myXPos = 100;
let myYPos = 100;
let marioImage;

function preload(){
    marioImage = loadImage("https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/MarioNSMBUDeluxe.png/170px-MarioNSMBUDeluxe.png")
}

function setup(){
    createCanvas(500,500);
    noStroke();

    rectMode(CENTER); //p5 will use (x,y) for rectange to refer to 
}

function draw(){
    background(0);

    fill(255,0,0);
    //rect(myXPos, myYPos, 50, 50);
    image(marioImage, myXPos, myYPos, 50, 50);

    if (keyIsDown(LEFT_ARROW)){
        myXPos -= 3;
    }

    if(keyIsDown(RIGHT_ARROW)){
        myXPos += 3
    }

    if(keyIsDown(UP_ARROW)){
        myYPos -= 3
    }

    if(keyIsDown(DOWN_ARROW)){
        myYPos += 3
    }
}
