
var angle=45;
var slider;
function setup(){
    createCanvas(400,400);
    slider=createSlider(5, 10,5.5, 0.03); 
    slider.position(50,height+10);
    colorMode(HSB);
}
function draw(){
    background(20,20,20,1);
    angle=slider.value();
    stroke(slider.value()*53, 100, 100, 1);
    translate(200,400);
    branch(90);
}
    

function branch(ht) {
    line(0,0,0,-ht);
    translate(0,-ht);
    if(ht>10){
        push();
        rotate(angle);
        branch(ht*0.75);
        pop();
        push();
        rotate(-angle);
        branch(ht*0.67);
        pop();
    }
    
}