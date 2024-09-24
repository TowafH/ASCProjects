function setup() { 
   createCanvas(500, 500);
   background(225, 225, 225);
}

function draw(){ // Draw loop, Infinite
   //mouseX & mouseY are pre-defined
   line(mouseX, mouseY, 250, 250);
}

function mouseClicked(){
   background(225,225,225);

   let r = random(0, 255);
   let g = random(0, 255);
   let b = random(0, 255);
   stroke(r,g,b);
}