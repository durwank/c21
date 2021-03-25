var fixedRect,movingRect;
var o1,o2,o3

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600, 300, 80, 50);
  o1 =createSprite(100,100,50,50);
  o2 =createSprite(200,100,50,50);
  o3 =createSprite(200,350,50,50);

  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
  o1.shapeColor="blue";
  o2.shapeColor="blue";
  o3.shapeColor="blue";
 
  o2.velocityY=2
  o3.velocityY=-2
}

function draw() {
  background(255,255,255);  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 
  if(isTouching(movingRect,o1))
  {
    movingRect.shapeColor="red"
    o1.shapeColor="red"
  }
  else
  {
    movingRect.shapeColor="blue"
    o1.shapeColor="blue" 
  }
  bounceoff(o2,o3)


  drawSprites();
}

  

