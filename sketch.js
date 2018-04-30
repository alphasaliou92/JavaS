var sky = "#f7f7f7";
var sun_moon = "#ffff00";


function setup() {
  // put setup code here
    createCanvas(720,400);
}

function draw() {
  // put drawing code here
    
    // sun_moon form
    
    background(sky);
    stroke("#eeee00");
    strokeWeight(2);
    fill(sun_moon);
    ellipse(520,50,40,40);
    
    // rectangle form / base of the lighthouse
    
    fill("#800080");
    rect(630,230,38,70);
    
    // triangle form / head of the lighthouse
    fill("#800080");
    triangle(630,230,650,200,668,230);
    
    // Grass form
    fill("#00cd66")
    beginShape();
    vertex(0,400);
    vertex(500,300);
    vertex(720,300);
    vertex(720,400);
    vertex(0,400);
    endShape(CLOSE);
    
    
    // Ocean form
    fill("#000090")
    beginShape();
    vertex(0,300);
    vertex(500,300);
    vertex(0,400);
    vertex(0,300);
    endShape(CLOSE);
    
    // text
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    text('Lighthouse',250,30);
}

function mouseClicked() {
    if (sky === "#f7f7f7") {
        sky = "#4876ff";   
    } else {
        sky = "#f7f7f7";
    }

// if statement for the sky
    
    if (sun_moon === "#ffff00") {
        sun_moon = "#f5f5f5";
    }else{
        sun_moon = "#ffff00";
    }
        
 // if statement for the sun_moon            
       
}
    
