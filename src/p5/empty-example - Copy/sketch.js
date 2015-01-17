var worldBox;
var bbox1;
var bbox2;
var ranx;
var rany;
function setup() {
  
// put setup code here
createCanvas(windowWidth,windowHeight)


worldBox = {xpos:0,ypos:0,w:windowWidth,h:windowHeight};



drawingContext.shadowOffsetX = 5;
drawingContext.shadowOffsetY = -5;
drawingContext.shadowBlur = 10;
drawingContext.shadowColor = "black";
bbox1= {h:50, w:50,xpos:100,ypos:200};
bbox2= {h:50, w:50,xpos:worldBox["h"],ypos:worldBox["w"]};

background(200);
}



function draw() {
  
// put drawing code here


update();
background(200);

//draw
rect(bbox1["xpos"],bbox1["ypos"],bbox1["w"],bbox1["h"]);
rect(bbox2["xpos"],bbox2["ypos"],bbox2["w"],bbox2["h"]);

}


function update()
{



var x = mouseX;
var y = mouseY;

bbox1["xpos"] = x;
bbox1["ypos"] = y;

if(isBoundOverlap(bbox1,bbox2))
{
	fill(255,0,0);
}


//is out of bounds?
if(isBoundOverlap(bbox2,worldBox))
{
    
    bbox2["xpos"]+=  ranx;
    bbox2["ypos"]+=  rany;
}
else
{
    bbox2["xpos"]=worldBox["w"]/2;
    bbox2["ypos"]=worldBox["h"]/2;
	ranx = Math.floor(Math.random() * (max - min)) + min;
	rany = Math.floor(Math.random() * (max - min)) + min;
}

}


function isBoundOverlap(boundBox1,boundBox2)
{

	if(boundBox1["xpos"] + boundBox1["w"] > boundBox2["xpos"]&& 
	boundBox1["ypos"] + boundBox1["h"] > boundBox2["ypos"] &&
	boundBox2["ypos"] + boundBox2["h"] > boundBox1["ypos"]&&
	boundBox2["xpos"] + boundBox2["w"] > boundBox1["xpos"])
	{
	return 1;
	}
	else
	{
	return 0;
	}	
}


/*---old code---

if(100<x && 300 > x && 100<y && 300 > y)
{ 
fill(255,0,0);
}

---------------*/
