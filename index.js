background(227, 249, 255);

//starting screen

function startScreen() {
  background(227, 249, 255);

  //button

  function button(x, y, w, h) {
    noFill();
    rect(x, y, w, h);
    fill(0, 0, 0);
    text("start", x, y + h / 2);
  }

  function draw() {
    button(100, 100, 200, 60);
  }

  //blue flower
}

startScreen();

//final screen

function finalScreen() {}

finalScreen();

//game screen

function gameScreen() {
  //frog

  function characterFrog() {
    push();
    noStroke();
    fill(184, 247, 82);
    ellipse(94, 300, 55);
    ellipse(78, 278, 20);
    ellipse(105, 276, 20);
    pop();

    //eyes

    push();
    noStroke();
    fill(0, 0, 0);
    ellipse(77, 275, 8);
    ellipse(106, 273, 8);
    pop();

    //stomach

    push();
    noStroke();
    fill(210, 250, 145);
    ellipse(95, 307, 40);
    pop();

    //smile

    push();
    noFill();
    beginShape();
    vertex(87, 283);
    bezierVertex(91, 287, 105, 283, 102, 282);
    endShape();
    pop();

    //paws

    push();
    fill(184, 247, 82);
    noStroke();
    ellipse(101, 323, 15);
    ellipse(89, 323, 15);
    pop();
  }

  //move frog

  push();
  translate(15, 37);
  characterFrog();
  pop();

  //blue flower

  function flowerBlue(x, y) {
    //petals

    push();
    noStroke();
    fill(179, 211, 259);
    ellipse(x - 47, y, 20);
    ellipse(x - 35, y + 7, 20);
    ellipse(x - 38, y + 24, 20);
    ellipse(x - 54, y + 24, 20);
    ellipse(x - 59, y + 7, 20);
    pop();

    //center

    push();
    noStroke();
    fill(252, 252, 121);
    ellipse(x - 47, y + 13, 16);
    pop();
  }

  flowerBlue(100, 150);

  //pink flower

  function flowerPink(x, y) {
    //petals

    push();
    noStroke();
    fill(252, 111, 153);
    ellipse(x - 47, y, 20);
    ellipse(x - 35, y + 7, 20);
    ellipse(x - 38, y + 24, 20);
    ellipse(x - 54, y + 24, 20);
    ellipse(x - 59, y + 7, 20);
    pop();

    //center

    push();
    noStroke();
    fill(252, 252, 121);
    ellipse(x - 47, y + 13, 16);
    pop();
  }

  flowerPink(300, 200);

  //purple flower

  function flowerPurple(x, y) {
    //petals

    push();
    noStroke();
    fill(220, 130, 250);
    ellipse(x - 47, y, 20);
    ellipse(x - 35, y + 7, 20);
    ellipse(x - 38, y + 24, 20);
    ellipse(x - 54, y + 24, 20);
    ellipse(x - 59, y + 7, 20);
    pop();

    //center

    push();
    noStroke();
    fill(252, 252, 121);
    ellipse(x - 47, y + 13, 16);
    pop();
  }

  flowerPurple(150, 200);

  //pillar drawing

  function pillar(x, y, s) {
    //bottom

    push();
    noStroke();
    fill(252, 218, 162);
    rect(x - 100 * s, y - 78 * s, 30 * s, 300 * s);
    pop();

    //grass

    push();
    noStroke();
    fill(69, 120, 56);
    rect(x - 100 * s, y - 80 * s, 30 * s, 20 * s);
    ellipse(x - 92 * s, y - 57 * s, 14 * s);
    ellipse(x - 79 * s, y - 58 * s, 19 * s);
    pop();

    //little details

    push();
    noStroke();
    fill(244, 212, 252);
    ellipse(x - 94 * s, y - 74 * s, 4 * s);
    ellipse(x - 78 * s, y - 73 * s, 4 * s);
    ellipse(x - 85 * s, y - 64 * s, 4 * s);
    pop();
  }

  pillar(460, 350, 1.3);

  //pillar animation

  let x = 100;

  function draw() {
    clear();
    background(227, 249, 255);
    characterFrog();
    flowerBlue(100, 100);
    flowerPink(150, 100);
    pillar(x, 250, 1.0);
    pillar(x - 120, 350, 1.0);
    pillar(x - 260, 300, 1.0);

    x = x + 2.6;
  }
}

//gameScreen();
