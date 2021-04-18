let theme = localStorage.getItem('theme')

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function pie(colour, w, x, y) {
 fill(colour);
 var h = map(mouseX, 0, width, 0, 360);
 arc(x, y, w, w, radians(0), radians(h));
}

function draw() {
  if (theme == "dark") {
    background(0);
  }
  else if (theme == "light") {
    background(255);
  }
  // background(255);
  fill(100, 10, 20);
  noStroke();
  var c = map(mouseY, 0, height, 0, 255);
  // var col = color(c);
  for (h = 1; h < 9; h++) {
    for (w = 1; w < 9; w++) {
      pie(c, 30, (windowWidth/10)*w, (windowHeight/10)*h);
    } 
  }
}
