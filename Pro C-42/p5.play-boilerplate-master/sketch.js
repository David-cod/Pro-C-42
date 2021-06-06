var iss,spaceCraft
var hasDocked=false;
var issImage,backgroundImage,spaceCraftImage1,spaceCraftImage2,spaceCraftImage3,spaceCraftImage4;

function setup() {
  createCanvas(800,400);
  spaceCraft=createSprite(400, 350, 50, 50);
  iss=createSprite(400,200,50,50);
  issImage=loadImage("images/iss.png");
  backgroundImage=loadImage("images/spacebg.jpg");
  spaceCraftImage1=loadImage("images/spacecraft1.png");
  spaceCraftImage2=loadImage("images/spacecraft2.png");
  spaceCraftImage3=loadImage("images/spacecraft3.png");
  spaceCraftImage4=loadImage("images/spacecraft4.png");
}

function draw() {
  background(backgroundImage);  
  iss.addImage("iss",issImage);
  spaceCraft.addImage("spaceCraft1",spaceCraftImage1);
  spaceCraft.scale=0.15;
//  spaceCraft.debug=true;
 //iss.debug=true;
 console.log(spaceCraft.x);
 console.log(spaceCraft.y);
 fill(255)
 text("spaceCraftX="+spaceCraft.x,50,50);
 text("spaceCraftY="+spaceCraft.y,50,100);
 text("Dock the spaceCraft at 330,260",50,150)
  if(hasDocked===false){
    if(keyDown("left")){
      spaceCraft.x=spaceCraft.x-1
      spaceCraft.addImage("spaceCraft1",spaceCraftImage3)
      
    }
    if(keyDown("right")){
      spaceCraft.x=spaceCraft.x+1
      spaceCraft.addImage("spaceCraft1",spaceCraftImage4)
    }
    if(keyDown("up")){
      spaceCraft.y=spaceCraft.y-1
      spaceCraft.addImage("spaceCraft1",spaceCraftImage2)
    }
    if(keyDown("down")){
      spaceCraft.y=spaceCraft.y+1
    }

  }
 if(spaceCraft.x=== 330 && spaceCraft.y===260){
 hasDocked=true;


 }
if(!hasDocked===false){
textSize(24);
fill(255)
text("Docking Successful", 400,350);

}
  
  drawSprites();
}
