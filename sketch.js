var bg,bg2,form,system,code,security;
var score=0;
var bg ,treasure_img;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  treasure_img = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(treasure_img)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    fill("white");
    text("HURRAY YOU DID !!",310, 300);
  }
  drawSprites()
}