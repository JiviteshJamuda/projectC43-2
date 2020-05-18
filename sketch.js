// Variables for the player and the ball
var playerPaddle;
var ball;

// Variables for the boundaries
var borderTop, borderLeft, borderRight;

// Variables for the targets
var bTarget1, rTarget1, gTarget1;

// Score, lives
var score = 0, lives = 3;

// Gamestate
var gameState = "serve";


function setup() {
  createCanvas(650,650);
 
  // Creating the boundaries
  borderTop = createSprite(325,2.5,700,5);
  borderLeft = createSprite(2.5,325,5,700);
  borderRight = createSprite(647.5,325,5,700);

  // Targets the player needs to hit inorder to win the game
  // Blue
  bTarget1 = new blueBlock(40,100);
  bTarget2 = new blueBlock(100,130);
  bTarget3 = new blueBlock(400,100);
  bTarget4 = new blueBlock(450,130);
  bTarget5 = new blueBlock(200,190);
  bTarget6 = new blueBlock(300,220);
  bTarget7 = new blueBlock(500,190);
  bTarget8 = new blueBlock(620,220);

  // Red
  rTarget1 = new redBlock(90,100);
  rTarget2 = new redBlock(150,130);
  rTarget3 = new redBlock(510,100);
  rTarget4 = new redBlock(400,130);
  rTarget5 = new redBlock(320,190);
  rTarget6 = new redBlock(250,220);
  rTarget7 = new redBlock(510,220);
  rTarget8 = new redBlock(550,190);

  //Green
  gTarget1 = new greenBlock(40,130);
  gTarget2 = new greenBlock(150,100);
  gTarget3 = new greenBlock(460,100);
  gTarget4 = new greenBlock(510,130);
  gTarget5 = new greenBlock(260,190);
  gTarget6 = new greenBlock(190,220);
  gTarget7 = new greenBlock(610,190);
  gTarget8 = new greenBlock(560,220);

  // Creating the player 
  playerPaddle = createSprite(325,625,70,15);
  playerPaddle.shapeColor = "black";
  // Creating the ball
  ball = createSprite(325,600,10,10);
  ball.shapeColor = "brown";
 
}

function draw() {
  background(251,188,5);

  // Destroying the targets
  bTarget1.kill();
  bTarget2.kill();
  bTarget3.kill();
  bTarget4.kill();
  bTarget5.kill();
  bTarget6.kill();
  bTarget7.kill();
  bTarget8.kill();

  rTarget1.kill();
  rTarget2.kill();
  rTarget3.kill();
  rTarget4.kill();
  rTarget5.kill();
  rTarget6.kill();
  rTarget7.kill();
  rTarget8.kill();

  gTarget1.kill();
  gTarget2.kill();
  gTarget3.kill();
  gTarget4.kill();
  gTarget5.kill();
  gTarget6.kill();
  gTarget7.kill();
  gTarget8.kill();

  // Controlling the paddle using the movement of mouse
  playerPaddle.x = mouseX;

  // Making the ball bounce off the edges
  ball.bounceOff(playerPaddle);
  ball.bounceOff(borderTop);
  ball.bounceOff(borderRight);
  ball.bounceOff(borderLeft);
  
  // Serve
  if(gameState === "serve"){
    textAlign(CENTER);
    textSize(25);
    text("Press Space to serve",325,570)

    if(keyDown("space")){
      ball.velocityX = 8;
      ball.velocityY = 8;
      gameState = "play";
    };
  };
  
  // Lose
  if(ball.y > 650){
    ball.x = 325;
    ball.y = 600;
    ball.velocityX = 0;
    ball.velocityY = 0;
    lives--;
    gameState = "serve";
  };

  // Game lost
  if(lives <= 0){
    clear();
    ball.velocityX = 0;
    ball.velocityY = 0;
    textSize(100);
    textAlign(CENTER);
    fill("red");
    text("YOU LOST",325,325);
    gameState = "end";
  };

  // Winning condition
  if(score >= 24){
    clear();
    ball.velocityX = 0;
    ball.velocityY = 0;
    textSize(100);
    textAlign(CENTER);
    fill("green");
    text("YOU WIN",325,325);
    gameState = "end"
  };

  // Show the number of lives left
  textAlign(CENTER);
  textSize(25);
  fill("black");
  text("Lives : " + lives,590,30);

  drawSprites();
}