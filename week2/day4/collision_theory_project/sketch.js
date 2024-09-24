let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let enemyColor;
let collideAmount = 0;
let flowerImg;
let butterflyImg;
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function preload(){
    butterflyImg = loadImage("images/butterfly.png");
    flowerImg = loadImage("images/flower.png");
}

function setup() {
    enemyColor = (0,0,255);
    createCanvas(500, 500);
    noStroke();
    imageMode(CENTER);
}


function draw() {
   background(0);


   fill(enemyColor);
   //rect(enemyXPos, enemyYPos, 50, 50);
    image(flowerImg, enemyXPos, enemyYPos, 50, 50);

   fill(255, 0, 0);
   //rect(myXPos, myYPos, 50, 50);
    image(butterflyImg, myXPos, myYPos, 50, 50);

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
   enemyBottom = enemyYPos + 25;

    //Visualize Coordinates
    fill(255);
    let label1 = "X:"+ mouseX;
    let label2 = "Y:"+ mouseY;
    textSize(10);
    text(label1, 100, 100);
    text(label2, 100, 115);

    let scoreLabel = "Score: " + collideAmount;
    text(scoreLabel, 50, 100);

   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
   }


   else {
    fill(random(255), random(255), random(255));
    textSize(22);
    text("I'm colliding with my enemy. Ouch!", 140, 480);

    let randDecimalX = Math.random() * 501;
    let randDecimalY = Math.random() * 501;
    enemyXPos = Math.floor(randDecimalX);
    enemyYPos = Math.floor(randDecimalY);
    enemyColor = color(random(255), random(255), random(255));
    collideAmount++
   }

}
