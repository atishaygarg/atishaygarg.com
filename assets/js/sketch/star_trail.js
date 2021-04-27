// Inspired from The Coding Train

let theme = localStorage.getItem('theme')
let stars = [];
let speed = 10;
var tx;
var ty;

function setup() {
  var canvas = createCanvas(windowWidth, 500);
  canvas.parent('sketch-holder');
  for (let i=0; i < 800; i++) {
    stars[i] = new Star();
  }
}


function draw() {
  if (theme == "dark") {
    background(0);
  }
  else if (theme == "light") {
    background(255);
  }
  else if (theme == null) {
    background(255);
  }
  if (!mouseIsPressed) {
    new_speed = map(mouseX, 0, width, -5, 60);
    //translate(width/2, height/2);
  }
  if (new_speed != null) {
    speed = new_speed;
  }
  //translate(width / 2, height / 2);
  // if (mouseIsPressed) {
  //   //translate(mouseX, mouseY);
  //   tx = mouseX
  //   ty = mouseY
  // }
  if ((tx == null) && (ty == null)) {
    tx = width/2;
    ty = height/2;
  }
  translate(tx, ty);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}