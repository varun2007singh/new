const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var astronaut;

function preload() {
 sleep = loadAnimation('Images/sleep.png');
 brush = loadAnimation('Images/brush.png');
 bath = loadAnimation('Images/bath.png');
 drink = loadAnimation('Images/drink1.png','Images/drink2.png');
 eat = loadAnimation('Images/eat1.png','Images/eat2.png');
 iss = loadAnimation('Images/iss.png');
  gym = loadAnimation('Images/gym1.png','Images/gym2.png','Images/gym11.png','Images/gym12.png');
  move = loadAnimation('Images/move.png','Images/move1.png')


}

function setup() {
  createCanvas(800,400);
 createSprite(400, 200, 50, 50);
 astronaut = createSprite = (300,220)
 astronaut.addAnimation('sleeping',sleep)
 astronaut.scale = 0.1

}

function draw() {
  background(255,255,255);  
  if(keydown('UP_ARROW')){
   astronaut.addAnimation('brushing',brush);
   astronaut.y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;

  }
  if(keydown('Down_ARROW')){
    astronaut.addAnimation('gymming',gym);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 
   }
   if(keydown('Left_ARROW')){
    astronaut.addAnimation('eating',eat);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 
   }

   if(keydown('M_KEY')){
    astronaut.addAnimation('moving',move);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 
   }
   if(keydown('RIGHT_ARROW')){
    astronaut.addAnimation('bathing',bath);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 
   }


  drawSprites();
}