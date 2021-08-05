var runner;
var runnerimg;
var lion;
var lionimg;
var backg;
var backgimg;
var ig;
var gameState="PLAY"
var score=0;



function preload() {
      lionimg = loadImage("images/lion.gif")
      backgimg = loadImage("images/park.jpg")
      runnerimg = loadImage("images/runner.gif")
}

function setup() {
      createCanvas(600, 400);
      backg = createSprite(300, 200)
      backg.addImage(backgimg)
      backg.scale = 0.5
      backg.velocityX=-3
      backg.x = backg.width /2;

      lion = createSprite(200, 310)
      lion.addImage(lionimg)
      lion.scale=0.15
      ig = createSprite(300, 350,600,5)
      
      runner = createSprite(380, 300)
      runner.addImage(runnerimg)
      runner.scale=0.3
      ig.visible=true
   score=0;  
  
}

function draw() {
      background(300)
      if(gameState="PLAY"){
      if (backg.x<0){
            backg.x = backg.width/2
      }

            
            if(keyDown("space")){
                  runner.velocityY=-10 
          }
   runner.velocityY=runner.velocityY+0.5;
   
   runner.collide(ig)
   lion.collide(ig)

  
            
      }
     
      drawSprites()
     
}