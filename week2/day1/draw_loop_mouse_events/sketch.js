function setup() { // Execute first
    createCanvas(500, 500);
    background(0, 0, 0);
 
}

function draw(){ // Draw loop, Infinite

    //mouseX & mouseY are pre-defined
    ellipse(mouseX, mouseY, 100, 100);
}

function mouseClicked(){
        //p5 has its own function for generating random#
        let xPos = random(0, 500);
        let yPos = random(0, 500);
    
        let r = random(0, 255);
        let g = random(0, 255);
        let b = random(0, 255);

        fill(r,g,b);
    
}