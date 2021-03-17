var Ghost;
var tower ;
var door,  doorsGroup;
var PLAY=0
var END=1
var c, ci, csGroup;
var ib, idsGroup;

function preload() {
 
  
}

function setup () {
  createCanvas(600,600);
  tower=createSprite(300,300,10,10);
  Ghost=createSprite(300,300,10,10);
  Ghost.scale=0.3;
 
  tower.velocityY=1;
  
  doorsGroup=new Group();
  idsGroup=new Group();
  csGroup=new Group();
}

function draw() {
  background="red"
  if (tower.y>600){
    tower.y=300;
    
  }
  if (keyDown("space")) {
    Ghost.velocityY=-10;
  }
  if (keyDown("right")) {
    Ghost.x=Ghost.x+5;
  }
  if (keyDown("left")) {
    Ghost.x=Ghost.x-5;
  }
  
  if (idsGroup.isTouching(Ghost)) {
    
    idsGroup.DestroyEach(0);
    csGroup.DestroyEach(0);
    doorsGroup.DestroyEach(0);
    text("Game Over",300,300); 
    
    
    
    
  }
  Ghost.velocityY=Ghost.velocityY+0.20;         
  dor();
  drawSprites();
}

function dor(){
  if(frameCount%200===0){
    door=createSprite(500,0,10,10);
    door.velocityY=1;
    c=createSprite(500,50,10,10);
    c.velocityY=1;
  
    id=createSprite(500,60,50,10);
    id.shapeColor="red"
    id.velocityY=1
     door.x= Math.round(random(100,400))
    c.x=door.x;
    id.x=c.x;
    csGroup.add(c);
    idsGroup.add(id);
    doorsGroup.add(door);
  }
  
}
