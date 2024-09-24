let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;


function setup() {
   createCanvas(500, 500);
   noStroke();


   rectMode(CENTER);
}


function draw() {
   background(0);

    fill(0,0,255);
    rect(enemyXPos, enemyYPos, 50, 50);

    fill(255, 0, 0);
    rect(myXPos, myYPos, 50, 50);


   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }

   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;

   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos  + 25;

   //Detects for NO COLLISON
   if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){
    console.log("No Collision");
} else {
    console.log("Collision")

    fill(random(0,255));
    text(22);
    text("I'm Colliding with my enemy, Ouch!", 140, 480);

}

    //Visualize Coordinates
    fill(255);
    let label1 = "X:"+ mouseX;
    let label2 = "Y:"+ mouseY;
    text(label1, 50, 100);
    text(label2, 50, 115);
}