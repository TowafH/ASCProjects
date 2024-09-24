function setup(){
    createCanvas(500,500);
    background(0);
    noStroke();
}

let state = "white"
function draw(){
    fill(255,0,0);
    rect(0, 0, 100, 100);
    fill(0,255,0);
    rect(100, 0, 100, 100);
    fill(0,0,255);
    rect(200, 0, 100, 100);

    if (state == "white"){
        fill(255);
    } else if (state == "red"){
        fill(255, 0, 0);
    }

    ellipse(250, 250, 200, 200);

    //fill(0,0,255);
    //text(mouseX, t0, 250);
}

function mouseClicked(){
    if(mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY <100){
        state = "red";
    } else if (mouseX > 200 && mouseX < 300 && mouseY > 0 && mouseY < 100){
        state = "blue";
    }

}