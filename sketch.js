

var tom,sittingTom,happyTom,runningTom;
var jerry,sittingJerry,happyJerry,mouse;
var background,backgroundImg;

function preload(){
    backgroundImg=loadImage("garden.png");
    sittingTom=loadImage("cat4.png");
    sittingJerry=loadImage("mouse4.png");
    happyTom=loadImage("cat1.png");
    happyJerry=loadImage("mouse1.png");
    runningTom=loadAnimation("cat2.png","cat3.png");
    mouse=loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
  createCanvas(1000,800);

  background=createSprite(300,400,10,10);
  background.addImage("bgImg",backgroundImg);
  tom=createSprite(400,100,50,80);
  tom.addImage("tomImg",sittingTom);
  jerry=createSprite(500,400,80,30);
  jerry.addImage("jerryImg",sittingJerry);

}

function draw(){
  background(255);

//   if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
//     && fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2){
//       movingrectangle.velocityX=movingrectangle.velocityX*(-1);
//       fixedrectangle.velocityX=fixedrectangle.velocityX*(-1);

//   }
//   if(movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2
//     &&fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
//       fixedrectangle.velocityY=fixedrectangle.velocityY*(-1);
//       movingrectangle.velocityY=movingrectangle.velocityY*(-1);
//     }
  drawSprites();
}