var fixedRect,movingRect;
var movingRect1,movingRect2

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,50,50);
  movingRect.shapeColor="green";

  movingRect1=createSprite(400,300,50,50);
  movingRect1.shapeColor="blue";
  movingRect2=createSprite(700,300,50,50);
  movingRect2.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  console.log(fixedRect.x,movingRect.x)

  movingRect1.velocityX= 1;
  movingRect2.velocityX=-1;

  if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x- movingRect.x<=fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2 && 
    fixedRect.y- movingRect.y<=fixedRect.height/2+movingRect.height/2) {

    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

  if ( movingRect1.x - movingRect2.x < movingRect1.width/2 + movingRect2.width/2
    && movingRect2.x - movingRect1.x < movingRect1.width/2 + movingRect2.width/2) {
  
  
      movingRect1.velocityX = movingRect1.velocityX * (-1);
      movingRect2.velocityX = movingRect2.velocityX * (-1);
}


  drawSprites();
}