var wall, wall1,wall2, thickness;
var bullet,bullet1,bullet2, speed, weight;

function setup() {
  createCanvas(1600,900);

thickness=random(22, 83);
speed=random(22, 55);
weight=random(30, 52);

 bullet=createSprite(50, 200, 50, 10);
bullet.velocityX = speed;
bullet.shapeColor="white";

bullet1=createSprite(50, 400, 50, 10);
bullet1.velocityX = speed;
bullet.shapeColor="grey";

bullet2=createSprite(50, 600, 50, 10);
bullet2.velocityX = speed;
bullet.shapeColor="red";



wall=createSprite(990, 190, thickness, height/7);
wall.shapeColor=(80,80,80);

wall1=createSprite(990,400,thickness,height/7)
wall.shapecolor=(80,80,70)

wall2=createSprite(990,600,thickness,height/7)
wall.shapecolor=(80,80,70)







}

function draw() {
  background(0);  

  

    if(hasCollided(bullet, wall)){

      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall.shapeColor=color(225, 0, 0);
       
      }
  
      if(damage<10){
        wall.shapeColor=color(0, 255, 0);
       
      }
    }


    if(hasCollided(bullet1, wall1)){

      bullet1.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall1.shapeColor=color(225, 0, 0);
       
      }
  
      if(damage<10){
        wall1.shapeColor=color(0, 255, 0);
       
      }
    }

    if(hasCollided(bullet2, wall2)){

      bullet2.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall2.shapeColor=color(225, 0, 0);
       
      }
  
      if(damage<10){
        wall2.shapeColor=color(0, 255, 0);
       
      }
    }
  drawSprites();
}

function hasCollided(Lbullet, Lwall){

bulletRightEdge=Lbullet.x + Lbullet.width;
wallLeftEdge = Lwall.x;
wall1LeftEdge = Lwall.x;
wall2LeftEdge = Lwall.x;



if(bulletRightEdge>=wallLeftEdge){

  return true;
}

return false;
}