var car1 , car2 , car3, wall1 , wall2, wall3 , img1 , img2 , img3;
var speed1 , speed2 , speed3 , weight;

function preload(){
  img1 = loadImage("images.png");
  img2 = loadImage("download (2).png");
  img3 = loadImage("images3.png");
}

function setup() {
  createCanvas(800,400);
  car3 = createSprite(700, 300, 20, 20);
  car3.addImage(img1);
  car3.scale = 0.5;

  car1 = createSprite(700,69,20,20);
  car1.addImage(img2);
  car1.scale = 0.5;
  car1.debug = true;
  car1.setCollider("rectangle", 0, 0 , 5 , 5);

  car2 = createSprite(700,200,20,20);
  car2.addImage(img3);
  car2.scale = 0.5;

  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  weight= random(400,1500);

  car1.velocityX = -1 *speed;

  car2.velocityX = -1 *speed2;

  car3.velocityX = -1 *speed3;


  wall1 = createSprite(100, 70, 40, 70);
  wall1.debug = true;
  wall2 = createSprite(100 , 170 , 20, 70);
  wall3 = createSprite(100, 270 , 20 ,70);
}

function draw() {
  background(0);  
  if(isTouching(wall1,car1)){
    var deformation = (0.5*weight*speed*speed)/22500;
    
    if(deformation < 100){
      wall1.shapeColor = "lightgreen";
      }
    else if(deformation > 100 && deformation < 180){
      wall1.shapeColor = "yellow";
    }
    else if(deformation > 180){
      wall1.shapeColor = "red";
    }
  }
  if(isTouching(wall2,car2)){
    var deformation = (0.5*weight*speed2*speed2)/22500;
    
    if(deformation < 100){
      wall2.shapeColor = "lightgreen";
      }
    else if(deformation > 100 && deformation < 180){
      wall2.shapeColor = "yellow";
    }
    else if(deformation > 180){
      wall2.shapeColor = "red";
    }
  }
  if(isTouching(wall3,car3)){
    var deformation = (0.5*weight*speed3*speed3)/22500;
    
    if(deformation < 100){
      wall3.shapeColor = "lightgreen";
      }
    else if(deformation > 100 && deformation < 180){
      wall3.shapeColor = "yellow";
    }
    else if(deformation > 180){
      wall3.shapeColor = "red";
    }
  }
  drawSprites();
}

function isTouching(ob1 , ob2){
  if((ob2.x - ob1.x < ob2.width/2 - ob1.width/2)){
    ob2.velocityX = 0;
    return true;
  }
  else{
    return false;
  }
}