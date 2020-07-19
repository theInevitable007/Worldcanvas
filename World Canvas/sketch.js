var marker;

function preload()
{
}

function setup() {
	createCanvas(500,500);
    database = firebase.database();
    var markerRef = database.ref('marker/position');
    markerRef.on("value",readPosition);

    marker = createSprite(250,250,50,10);
    marker.shapeColor = "black";
  
}


function draw() {  

  drawSprites();

}

function readPosition(data){
  position = data.val();
  
  marker.x = position.x;
  marker.y = position.y;
}

function changePosition(x,y){
  database.ref('ball/position').set({
      'x' : position.x + x,
      'y' : position.y + y

  })
}

function mousePressed(){

}