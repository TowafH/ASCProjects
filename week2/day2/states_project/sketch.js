let drawCircle = true;

function setup() {
   createCanvas(500, 500);
   background(255, 255, 255);
}


function draw() {
   let r = random(0, 255);
   let g = random(0, 255);
   let b = random(0, 255);
   let opacity = random (120, 180);
   fill(r, g, b, opacity);
   noStroke();


   let size = random(5, 35);
   let offSetX = random(-25, 25);
   let offSetY = random(-25, 25);
   if (drawCircle == true){
    ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
   } 
   
   if (drawCircle == false){
    square(mouseX + offSetX, mouseY + offSetY, size);
   } /*else if (drawSquare == false) {
    triangle(mouseX + offSetX, mouseY + offSetY, size, size);
   }*/
}


function mouseClicked() {
    if (drawCircle == true){
        drawCircle == false;
    } 
    /*drawSquare = true;
    if (drawSquare == true){
        drawSquare == false;
    }*/
}
