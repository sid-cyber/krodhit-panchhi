function setup() {
  createCanvas(600, 200);
  Text("press space");
  background(255);
  
}
function draw() {
var bird = createSprite(300,100,40,70);
bird.shapeColor = "red";
if(keyPressed("space")){
  bird.velocityX = 2;
  bird.velocityY = -2;
}  
 drawSprites(); 
}

