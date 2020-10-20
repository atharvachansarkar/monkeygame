var fixedRect, movingRect;

var gameObject1 , gameObject2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(300,100,50,80)

  gameObject2 = createSprite(300,800,50,80)

  gameObject2.velocityY = -5;
  gameObject1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(gameObject1,gameObject2);


  drawSprites();
}

