function setup() {
  frameRate(30);
}

function scenery() {
  createCanvas(900, 700);
  background(197, 229, 232);

  //floor
  push();
  noStroke();
  fill(118, 184, 118);
  rect(0, 480, 900, 250);
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
  ellipse(456, 62, 100);
  ellipse(508, 62, 100);
  ellipse(570, 62, 100);
  pop();

  //mr sun
  push();
  noStroke();
  fill(250, 152, 60);
  ellipse(840, 84, 250);
  pop();

  push();
  noStroke();
  fill(255, 241, 71);
  ellipse(840, 84, 170);
  pop();
}
//frog

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

//flowers
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

function flowerOrange(x, y, s) {
  //petals

  push();
  noStroke();
  fill(250, 172, 127);
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

//variables

let characterFrogY = 100;
let velocity = 0.1;
let acceleration = 0.2;
let mode = 0;
const speed = 2;
let isGameActive = false;
var move = 5;
let x = 100;
let y = 200;

//actual game

function draw() {
  clear();
  scenery();
  flowerBlue(230, 520, 3.0);
  flowerPink(450, 520, 3.0);
  flowerPurple(680, 520, 3.0);
  flowerBlue(900, 520, 3.0);
  flowerPink(690, 620, 0.7);
  flowerPurple(708, 553, 0.7);
  flowerOrange(510, 656, 0.7);
  flowerBlue(600, 650, 0.7);
  flowerOrange(655, 500, 0.7);
  flowerPurple(141, 656, 0.7);
  flowerOrange(230, 623, 0.7);
  flowerBlue(320, 656, 0.7);
  flowerPink(410, 623, 0.7);
  flowerPurple(770, 662, 0.7);
  flowerOrange(858, 638, 0.7);

  if (mode === 0) {
    //game is not active
    textSize(30);
    text("Press enter to start", 320, 260);
  }

  if (mode === 1) {
    //game is active
    characterFrogY = characterFrogY + velocity;
    velocity = velocity + acceleration;

    //move sideways
    if (keyIsDown(65)) {
      x = x - speed;
    } else if (keyIsDown(68)) {
      x = x + speed;
    }

    characterFrog(x, characterFrogY);
  }
  // thext 6 lines were coded with the help of Tamzin Clegg
  if (characterFrogY > 230 && velocity > 2) {
    //losing screen
    mode = 2;
    loseScreen();
  }
  if (characterFrogY > 230 && velocity < 2) {
    //winning screen
    mode = 2;
    winScreen();
  }
  if (keyIsDown(83)) {
    //move the frog upwards
    velocity = velocity - 0.5;
  }
  if (characterFrogY < -3) {
    //boundary on the top of the screen
    characterFrogY = characterFrogY + move;
  }
}
// the next 8 lines of code were inspired by https://www.youtube.com/watch?v=z-4TeZpF8Aw&t=496s&ab_channel=CloudyHeavenGames
function resetGame() {
  // restart variables
  characterFrogY = 100;
  velocity = 2;
  acceleration = 0.3;
  mode = undefined;
  x = 200;
  y = 200;
  mode = 0;
}

// start the game
function keyPressed() {
  if (keyCode === 13) {
    if (mode === 0) {
      mode = 1;
    }
  }

  //restart the game
  if (keyCode === 32 && mode === 2) {
    resetGame();
  }
}

//LOSING SCREEN

function loseScreen() {
  scenery();
  textSize(30);
  text("Oh no! Mr. frog fell too hard :(", 320, 265);
  textSize(20);
  text("Press space to try again", 390, 300);
}

//WIN SCREEN

function winScreen() {
  scenery();
  textSize(30);
  text("You won!! :D", 330, 265);
  stroke(0, 0, 0);
  noFill();
}
