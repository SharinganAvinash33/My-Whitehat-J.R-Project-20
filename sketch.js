/* When the code is run, the car sprite sometimes gets into the wall sprite and makes it difficult or
 *impossible* to see the code. Due to this I had to make the wall invisible as soon as the car sprite touched
  it. The value of deformation is shown in the console to confirm if the code is working. The background is set
  to black for higher visibility */ 

var car,wall,speed,weight,deformation;
function setup() {

  //creating the canvas
  createCanvas(1600,400);

  //creating the car and the wall at opposite sides
  car=createSprite(100, 200, 20, 20);
  wall=createSprite(1500,200,40,height/2);

  //speed and weight are set ot random
  speed=Math.round(random(50,100));
  weight=Math.round(random(800,2000));
  car.velocityX=speed;

  //calculation for the value of deformation
  deformation=((0.5*weight*speed*speed)/22500);
  console.log(deformation);
}

function draw() {

  //black background
  background(0);  

  //code for detection and identification of collision
  if(car.isTouching(wall)){
    car.velocityX=0;
    wall.visible=false;
    if(deformation<100){
      car.shapeColor="green";
    }
    else if(deformation>=100&&deformation<=180){
      car.shapeColor="yellow";
    }
    else if(deformation>180){
      car.shapeColor="red";
    }

  }

  //drawing the sprites
  drawSprites();
}