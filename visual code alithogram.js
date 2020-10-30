var fixedrect,movingrect


function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(600, 200, 50, 80);
movingrect=createSprite(700,200,80,30)
fixedrect.shapeColor="green"
movingrect.shapeColor="red"
}

function draw() {
  background(0,0,0); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY  
 movingrect.debug=2
 fixedrect.debug=2
  if (movingrect.x-fixedrect.x===fixedrect.width/2+movingrect.widht/2){
    movingrect.shapeColor="green"
 fixedrect.shapeColor="green"
  }
else {movingrect.shapeColor="red"
fixedrect.shapeColor="red"
}
  drawSprites();
}