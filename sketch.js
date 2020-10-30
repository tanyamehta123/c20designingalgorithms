var movingRect, fixedRect
var movingRect2, fixedRect2;

function setup(){
  createCanvas(800, 400);
  movingRect = createSprite(500, 200, 100, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect2 = createSprite(200, 300, 100, 50);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;
  fixedRect2 = createSprite(200, 400, 50, 50);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
}

function draw(){
  background("black");
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  movingRect2.x = mouseX;
  movingRect2.y = mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(movingRect2.x-fixedRect2.x < fixedRect2.width/2 + movingRect2.width/2){
    movingRect2.shapeColor = "blue";
    fixedRect2.shapeColor = "blue";
  }
  else {
    movingRect2.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }

  drawSprites();
}