var bg,bg_Img;
var boy,boyIng;

function preload(){

  bg_Img = loadImage ("BG.png");
  boyIng = loadAnimation ("png/Run (1).png","png/Run (2).png","png/Run (3).png","png/Run (4).png","png/Run (5).png","png/Run (6).png","png/Run (7).png","png/Run (8).png");
}

function setup(){
  createCanvas(600,400);
    
  // movendo o plano de fundo
  bg = createSprite(200,200);
  bg.addImage (bg_Img);
  bg.scale = 1.2;
  bg.velocityX = - 2;

  //criando o menino correndo
  boy = createSprite(100,330,30,30);
  boy.scale = 0.3;
  boy.addAnimation ("Run", boyIng);
}

function draw () {
 background ("black");

  if (boy.x > 500){

    boy.x = 100;
  }

  if (bg.x < 0){

    bg.x = bg.width/4;
  }

  if (keyDown ("space")){
    boy.velocityX = + 2;
  }

  if (keyDown ("A")){
    boy.velocityX = - 2;
  }

  drawSprites();
}


