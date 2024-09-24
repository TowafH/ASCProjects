function setup() {
    createCanvas(500, 500); //500px Wide & 500px Tall
    background(220, 220, 220); //Sets a color for the BG
    strokeWeight(10);
    stroke(255, 0, 255);
    point(20, 20); // (x,y) Coordinates
    line(100, 100, 400, 400);

    fill(255, 0, 0);
    ellipse(180, 200, 200, 100);

    fill(0, 255, 0);
    rect(200, 200, 120, 190);

    fill(0, 0, 255);
    triangle(50, 450, 200, 450, 125, 320);
    
    fill(255, 255, 255);
    quad(340, 50, 300, 120, 430, 155, 450, 20);
 }
 