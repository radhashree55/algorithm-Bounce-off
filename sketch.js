var rect1,rect2;

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(700, 200, 50, 50);
 rect2 = createSprite(10,200,50,50);

 rect1.velocityX = -5;
 rect2.velocityX = 5;
}

function draw() {
  background(255,255,255);
  
  if ((rect1.x - rect2.x < rect1.width/2 + rect2.width/2) &&( rect2.x - rect1.x < rect1.width/2 + rect2.width/2 )){

    rect1.velocityX = rect1.velocityX * -1;
    rect2.velocityX = rect2.velocityX * -1;

    }
  

  drawSprites();
}