function setup(){
    createCanvas(500, 500);
    background(255, 255, 255);
}

function draw(){
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);

    let size = random(5, 35);
    let mouseOffSetX = random(5, 35);
    let mouseOffSetY = random(-25, 25)
    fill(r,g,b);
    noStroke();
    //stroke(r,g,b); <--Same color as Fill
    ellipse(mouseX+mouseOffSetX, mouseY+mouseOffSetY, size, size)
}

function mouseClicked(){
    background(255,255,255);
}