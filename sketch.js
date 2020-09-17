var redcar,greencar,yellowcar,wall1,wall2;
var redcarImg,greencarImg,yellowcarImg;
var speed,weight;
var crashingwall1,crashingwall2,crashingwall3;
var result1,result2,result3;

function preload()
{
   redcarImg=loadImage("redCar.png");
   greencarImg=loadImage("greenCar.png");
   yellowcarImg=loadImage("yellowCar.png");
}

function setup()
{
   createCanvas(1600,400);
   
  speed=random(55,90);
  weight=random(400,1500);
  
  result1=createSprite(800,60,1600,80);
  result1.shapeColor="blue";

  result2=createSprite(800,200,1600,80);
  result2.shapeColor="blue";

  result3=createSprite(800,340,1600,80);
  result3.shapeColor="blue";

  redcar=createSprite(70,50,50,50);
  redcar.addImage(redcarImg);
  redcar.scale=0.2;
  redcar.velocityX=speed;

  greencar=createSprite(70,200,50,50);
  greencar.addImage(greencarImg);
  greencar.scale=0.2;
  greencar.velocityX=speed;

  yellowcar=createSprite(70,350,50,50);
  yellowcar.addImage(yellowcarImg);
  yellowcar.scale=0.2;
  yellowcar.velocityX=speed;

  wall1=createSprite(800,125,1600,5);
  wall1.shapeColor="white";

  wall2=createSprite(800,275,1600,5);
  wall2.shapeColor="white";

  crashingwall1=createSprite(1500,60,30,70);
  crashingwall1.shapeColor="orange";


  crashingwall2=createSprite(1500,200,30,70);
  crashingwall2.shapeColor="orange";

  crashingwall3=createSprite(1500,340,30,70);
  crashingwall3.shapeColor="orange";

}

function draw() 
{
  background(0,0,0);
  
  if(crashingwall1.x - redcar.x < (crashingwall1.width + redcar.width) / 2 && 
  crashingwall2.x - greencar.x < (crashingwall2.width + greencar.width) / 2 &&
  crashingwall3.x - yellowcar.x < ( crashingwall3.width + yellowcar.width) / 2)
  {
    redcar.velocityX=0;
    greencar.velocityX=0;
    yellowcar.velocityX=0;
    
    var deformation=0.5 * weight * speed * speed / 22509;
    if(deformation > 180)
    {
       result1.shapeColor="red";
       result2.shapeColor="red";
       result3.shapeColor="red";
       
    }
  
    if(deformation < 180 && deformation > 100)
    {
       result1.shapeColor="yellow";
       result2.shapeColor="yellow";
       result3.shapeColor="yellow";
    }

    if(deformation < 100)
    {
       result1.shapeColor="green";
       result2.shapeColor="green";
       result3.shapeColor="green";
    }
  }

  

  drawSprites();
}