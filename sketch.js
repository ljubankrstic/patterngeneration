function setup() {
  createCanvas(600, 600);
  cell=10;
  background(0);
  x=0;
  y=0;
}

function draw() {
  stroke(255)
  strokeWeight(3)
  if (x>=width)
  {
    x=0;
    y+=cell
  }
  if (random(1)<0.5)
  {
    bcksl(x,y,cell);
  }
  else
  {
    forsl(x,y,cell);
  }
  if (y<height)
  {
  x+=cell
  }
}
function  bcksl(x,y,cell)
{
  line(x,y,x+cell,y+cell)
}
function forsl(x,y,cell)
{
  line(x+10,y,x,y+10)
}