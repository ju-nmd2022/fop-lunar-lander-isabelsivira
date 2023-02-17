background(227, 249, 255);
function characterFrog() {
  push();
  noStroke();
  fill(184, 247, 82);
  ellipse(94, 300, 55);
  ellipse(78, 278, 20);
  ellipse(105, 276, 20);
  pop();

  push();
  noStroke();
  fill(0, 0, 0);
  ellipse(77, 275, 8);
  ellipse(106, 273, 8);
  pop();

  push();
  noStroke();
  fill(210, 250, 145);
  ellipse(95, 307, 40);
  pop();

  push();
  noFill();
  beginShape();
  vertex(87, 283);
  bezierVertex(91, 287, 105, 283, 102, 282);
  endShape();
  pop();

  push();
  fill(184, 247, 82);
  noStroke();
  ellipse(101, 323, 15);
  ellipse(89, 323, 15);
  pop();
}

push();
translate(15, 37);
characterFrog();
pop();

function flowerBlue(x, y) {
  push();
  noStroke();
  fill(179, 211, 259);
  ellipse(x - 47, y, y - 80);
  ellipse(x - 35, y + 7, y - 80);
  ellipse(x - 38, y + 24, y - 80);
  ellipse(x - 54, y + 24, y - 80);
  ellipse(x - 59, y + 7, y - 80);
  pop();

  push();
  noStroke();
  fill(252, 252, 121);
  ellipse(x - 47, y + 13, y - 84);
  pop();
}

flowerBlue(100, 100);

function flowerPink(x, y) {
  push();
  noStroke();
  fill(252, 111, 153);
  ellipse(x - 47, y, y - 80);
  ellipse(x - 35, y + 7, y - 80);
  ellipse(x - 38, y + 24, y - 80);
  ellipse(x - 54, y + 24, y - 80);
  ellipse(x - 59, y + 7, y - 80);
  pop();

  push();
  noStroke();
  fill(252, 252, 121);
  ellipse(x - 47, y + 13, y - 84);
  pop();
}

flowerPink(200, 100);

function flowerPurple(x, y) {
  push();
  noStroke();
  fill(220, 130, 250);
  ellipse(x - 47, y, y - 80);
  ellipse(x - 35, y + 7, y - 80);
  ellipse(x - 38, y + 24, y - 80);
  ellipse(x - 54, y + 24, y - 80);
  ellipse(x - 59, y + 7, y - 80);
  pop();

  push();
  noStroke();
  fill(252, 252, 121);
  ellipse(x - 47, y + 13, y - 84);
  pop();
}

flowerPurple(150, 100);

function pillar(x, y, s) {
  push();
  noStroke();
  fill(252, 218, 162);
  rect(x - 100 * s, y - 78 * s, 30 * s, 300 * s);
  pop();

  push();
  noStroke();
  fill(69, 120, 56);
  rect(x - 100 * s, y - 78 * s, 30 * s, 20 * s);
  ellipse(x - 92 * s, y - 57 * s, 14 * s);
  ellipse(x - 79 * s, y - 58 * s, 19 * s);
  pop();

  push();
  noStroke();
  fill(244, 212, 252);
  ellipse(x - 94 * s, y - 74 * s, 4 * s);
  ellipse(x - 78 * s, y - 73 * s, 4 * s);
  ellipse(x - 85 * s, y - 64 * s, 4 * s);
  pop();
}

pillar(427, 250, 1.0);

let x = 100;

function draw() {
  clear();
  flowerBlue(100, 100);

  x = x + 5;
}
