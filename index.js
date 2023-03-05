mode = 0;
function setUp() {
  createCanvas(630, 580);
  background(197, 229, 232);

  //floor
  push();
  noStroke();
  fill(118, 184, 118);
  rect(0, 480, width, 200);
  pop();

  //clouds
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(70, 62, 100);
  ellipse(130, 62, 100);
  ellipse(200, 62, 100);
  ellipse(263, 162, 75);
  ellipse(310, 162, 75);
  ellipse(360, 162, 75);
  pop();

  //mr sun
  push();
  noStroke();
  fill(250, 152, 60);
  ellipse(560, 84, 250);
  pop();

  push();
  noStroke();
  fill(255, 241, 71);
  ellipse(560, 84, 170);
  pop();

  //blue flower

  function flowerBlue(x, y, s) {
    //petals

    push();
    noStroke();
    fill(179, 211, 259);
    ellipse(x - 47 * s, y, 20 * s);
    ellipse(x - 35 * s, y + 7 * s, 20 * s);
    ellipse(x - 38 * s, y + 24 * s, 20 * s);
    ellipse(x - 54 * s, y + 24 * s, 20 * s);
    ellipse(x - 59 * s, y + 7 * s, 20 * s);
    pop();

    //center

    push();
    noStroke();
    fill(252, 252, 121);
    ellipse(x - 47 * s, y + 13 * s, 16 * s);
    pop();
  }

  //pink flower

  function flowerPink(x, y, s) {
    //petals

    push();
    noStroke();
    fill(252, 111, 153);
    ellipse(x - 47 * s, y, 20 * s);
    ellipse(x - 35 * s, y + 7 * s, 20 * s);
    ellipse(x - 38 * s, y + 24 * s, 20 * s);
    ellipse(x - 54 * s, y + 24 * s, 20 * s);
    ellipse(x - 59 * s, y + 7 * s, 20 * s);
    pop();

    //center

    push();
    noStroke();
    fill(252, 252, 121);
    ellipse(x - 47 * s, y + 13 * s, 16 * s);
    pop();
  }

  //purple flower

  function flowerPurple(x, y, s) {
    //petals

    push();
    noStroke();
    fill(220, 130, 250);
    ellipse(x - 47 * s, y, 20 * s);
    ellipse(x - 35 * s, y + 7 * s, 20 * s);
    ellipse(x - 38 * s, y + 24 * s, 20 * s);
    ellipse(x - 54 * s, y + 24 * s, 20 * s);
    ellipse(x - 59 * s, y + 7 * s, 20 * s);
    pop();

    //center

    push();
    noStroke();
    fill(252, 252, 121);
    ellipse(x - 47 * s, y + 13 * s, 16 * s);
    pop();
  }
  flowerBlue(210, 475, 3.0);
  flowerPink(450, 475, 3.0);
  flowerPurple(680, 475, 3.0);
}
//game screen
let x = 200;
let y = 200;
var mode;
const speed = 3;

function draw() {
  clear();
  setUp();

  function characterFrog(x, y) {
    push();
    translate(x, y);

    push();
    noStroke();
    fill(184, 247, 82);
    ellipse(x + 100, y + 50, 60);
    ellipse(x + 80, y + 20, 20);
    ellipse(x + 120, y + 20, 20);
    pop();

    push();
    noStroke();
    fill(0, 0, 0);
    ellipse(x + 80, y + 20, 10);
    ellipse(x + 120, y + 20, 10);
    pop();

    push();
    noStroke();
    fill(210, 250, 145);
    ellipse(x + 100, y + 55, 50);
    pop();

    push();
    noFill();
    beginShape();
    vertex(x + 90, y + 34);
    bezierVertex(x + 98, y + 45, x + 100, y + 45, x + 110, y + 34);
    endShape();
    pop();

    push();
    fill(184, 247, 82);
    noStroke();
    ellipse(x + 80, y + 50, 18);
    ellipse(x + 120, y + 50, 18);
    ellipse(x + 90, y + 75, 18);
    ellipse(x + 110, y + 75, 18);
    pop();
    pop();
  }
  if (mode == 0) {
    textSize(30);
    text("Press enter to start", 190, 260);
  }
  if (mode == 1) {
    characterFrog(100, 100);

    if (keyIsDown(65)) {
      x = x - speed;
    } else if (keyIsDown(68)) {
      x = x + speed;
    }
    if (keyIsDown(87)) {
      y = y - speed;
    } else if (keyIsDown(83)) {
      y = y + speed;
    }

    setUp();
    characterFrog(x, y);
  }
}

function keyPressed() {
  if (keyCode === 13) {
    mode = 1;
  }
  if (characterFrog(65, 520)) {
    winScreen();
  }
}

//LOSING SCREEN

function loseScreen() {
  setUp();
  textSize(30);
  text("Too bad, you lost :(", 180, 265);
  stroke(0, 0, 0);
  noFill();
  rect(160, 205, 290, 100);
}

//WIN SCREEN

function winScreen() {
  setUp();
  textSize(30);
  text("You won!! :D", 220, 265);
  stroke(0, 0, 0);
  noFill();
  rect(160, 205, 290, 100);
}
