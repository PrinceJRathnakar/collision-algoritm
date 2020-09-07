var fixedrect, movingrect;




function setup() {
  createCanvas(800,400);
    fixedrect = createSprite(400, 200, 80, 20);
    movingrect = createSprite(800, 200, 50, 50);


    fixedrect.shapeColor="yellow";
    movingrect.shapeColor="yellow";
}



function draw() {
    background(0);  

    movingrect.x = World.mouseX;
    movingrect.y = World.mouseY;
movingrect.debug=true;
fixedrect.debig=true;



if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 && movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2 ) { movingrect.shapeColor="red"; fixedrect.shapeColor="red"; } else{ movingrect.shapeColor="yellow"; fixedrect.shapeColor="yellow"; }
  drawSprites();
}