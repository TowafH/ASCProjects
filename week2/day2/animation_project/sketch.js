let yPos = 25;
let r = 0, g = 255, b = 0; // Initial color is green

function setup() {
   createCanvas(500, 500);
   background(0);
}

function draw() {
   background(0, 20);


   fill(r,g,b);
   ellipse(250, yPos, 50, 50);

   yPos += 3;

   if (yPos > 525) {
       yPos = -25;
   }
}

function mouseClicked(){
    yPos = 25;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
}
