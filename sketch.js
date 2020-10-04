var obj1,obj2

function setup(){
  createCanvas(2000,1000);
   obj1 =createSprite(400,500,200,100);
   obj2= createSprite(900,500,100,300);

}
function draw(){
  background(180);
  drawSprites();
  obj1.y=mouseY;
  obj1.x=mouseX;

  obj1.depth=obj2.depth;
  textSize(20)
  fill("red")
  text("moving rext X="+obj1.x,200,200);
  text("fixed rext X="+obj2.x,200,230);
  text("both rect X pos diff="+(obj2.x-obj1.x),200,260);
  text("both rect y pos diff="+(obj2.y-obj1.y),200,290);
  text("moving rect height="+obj1.height,200,320);
  text("moving rect width="+obj1.width,200,350);
  text("fixed rect height="+obj2.height,200,410);
  text("fixed rect width="+obj2.width,200,440);
  



if(obj2.x-obj1.x<(obj2.width+obj1.width)/2&&obj1.x-obj2.x<(obj2.width+obj1.width)/2
&&obj1.y-obj2.y<(obj2.height+obj1.height)/2&&obj2.y-obj1.y<(obj2.height+obj1.height)/2){
  obj1.shapeColor="red";
  obj2.shapeColor="red";

}else{
  obj1.shapeColor="green";
  obj2.shapeColor="green";

}


}