function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
}

function draw(){
    fill("#22ff00");
    rect(53, 20, 500, 55)
    fill("#22ff00");
    rect(530, 20, 55, 300);
    fill("#22ff00");
    rect(53, 330, 500, 55);
    fill("#22ff00");
    rect(30, 20, 55, 300);
    fill("#ff0000");
    circle(53, 53, 100);
    fill("#ff0000");
    circle(553, 53, 100);
    fill("#ff0000");
    circle(553, 353, 100);
    fill("#ff0000");
    circle(53, 350, 100);
}

function take_snapshot(){
    save("vishrutimg.png");
}

