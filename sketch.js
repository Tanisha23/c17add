//Game States
var PLAY=1;
var END =0;
var gameState=1;

var sword,swordImage;
var fruit,score;
var fruit1,fruit2,fruit3,fruit4;
var fruitGroup,EnemyGroup,gameOverImage,monsterImage;

function preload(){
  
 swordImage = loadImage("sword.png");
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png");
 gameOverImage=loadImage("gameover.png"); 
 monsterImage=loadAnimation("alien1.png","alien2.png");
  
}
function setup(){

  
//Creating sword
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  
  fruitGroup =  createGroup(); 
  EnemyGroup = createGroup();
  
  score=0;
}
function draw(){
background("black");
  
  
//CALL fruits and Enemy function


 if(gameState === PLAY) {
   fruits();
Enemy();
   sword.x=World.mouseX;
    sword.y=World.mouseY;
  
   //increase score if sword is touching fruit
   if(fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach();
   score=score+2;
   }
else{
 if(EnemyGroup.isTouching(sword)){
    gameState=END;
   
   fruitGroup.destroyEach();
   EnemyGroup.destroyEach();
    
   fruitGroup.SetvelocityX=0;
   EnemyGroup.SetvelocityX=0;
   
   sword.addImage(gameOverImage);
    sword.x=200;
    sword.y=200;
 }
 }
 }
drawSprites();
text("Score : "+ score,300,30);
}

function fruits (){
 if(World.frameCount%80===0) {
fruit=createSprite(400,200,20,20) ;
fruit.scale=0.2;
 //fruit.debug=true;
  r=Math.round(random(1,4));
if(r===1){
  fruit.addImage(fruit1);
}else if(r===2){
  fruit.addImage(fruit2);
}else if(r===3){
  fruit.addImage(fruit3);
}else{
  fruit.addImage(fruit4);
}
fruit.y=Math.round(random(50,340));
   
fruit.velocityX=-7;   
fruit.SetLifetime=100;
   
    
fruitGroup.add(fruit);
}  
}

function Enemy(){
  if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8;   
  monster.SetLifetime=50; 
  
  EnemyGroup.add(monster);
  } 
}