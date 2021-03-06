// for red, green, and blue color values
var r, g, b;

function randomColours(){
  var r = random(255);
  var g = random(255);
  var b = random(255);
  return color(r,g,b,1);
}

function setup() {
  createCanvas(720, 400);

  background(255);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);

  var star = new Star([50, 0, 100], [0, 100, 100]);
}

function draw() {
  //
  // Draw a circle

  stroke(r, g, b);
  fill(r, g, b, 127);
  // ellipse(360, 200, 200, 200);
}

function Star(xCoords, yCoords){
  var x1 = xCoords[0];
  var x2 = xCoords[1];
  var x3 = xCoords[2];
  var y1 = yCoords[0];
  var y2 = yCoords[1];
  var y3 = yCoords[2];

debugger
  // overlap two triangles
  fill(randomColours());
  triangle(x1,y1,x2,y2,x3,y3);
  push();
  pop();
  rotate(PI);
}
