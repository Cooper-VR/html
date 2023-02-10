//get and set the canvas
const canvas = document.getElementById("pongGame");
const context = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 400;

//create score varrables
let score1 = 0;
let score2 = 0;

//movement
window.addEventListener("keypress", doKeyDown, false);
function doKeyDown(e){
    let key = e.key;

    if (key == "w" && player1.y - player1.gravity > 0){
        player1.y -= player1.gravity * 6;
    } else if (key == "s" && player1.y + player1.gravity < canvas.height){
        player1.y += player1.gravity * 6;
    }
}
window.addEventListener("keypress", doKeyDown2, false);
function doKeyDown2(e){
    let key = e.key;

    if (key == "i" && player2.y - player2.gravity > 0){
        player2.y -= player2.gravity * 6;
    } else if (key == "k" && player2.y + player2.gravity < canvas.height){
        player2.y += player2.gravity * 6;
    }
}

//constructor for moving objects
class Element{
    constructor(options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;
        this.speed = options.speed || 2;
        this.gravity = options.gravity;
    }
}

//player 1 paddle
const player1 = new Element({
    x: 10,
    y: 200,
    width: 15,
    height: 80,
    color:"#fff",
    gravity: 2,
});

//player 2 paddle
const player2 = new Element({
    x: 625,
    y: 200,
    width: 15,
    height: 80,
    color:"#fff",
    gravity: 2,
});

//ball
const ball = new Element({
    x: 650/2,
    y: 200,
    width: 15,
    height: 15,
    color:"#fff",
    speed: 1,
    gravity: 1,
});

//player1 score text
function diplayScore1(){
    context.font = "18px Arial"
    context.fillStyle = "#fff"
    context.fillText(score1, canvas.width/2 - 60, 30)
}
//player2 score text
function diplayScore2(){
    context.font = "18px Arial"
    context.fillStyle = "#fff"
    context.fillText(score2, canvas.width/2 + 60, 30)
}

//make ball bounce
function ballBounce(){
    if (ball.y + ball.gravity <= 0 || ball.y + ball.gravity >= canvas.height){
        ball.gravity = ball.gravity * -1;
        ball.y += ball.gravity;
        ball.x += ball.speed;
    } else {
        ball.y += ball.gravity;
        ball.x += ball.speed;
    }
    ballWallCollision();
}

//check if ball is hitting paddle or wall
function ballWallCollision(){
    if ((ball.y + ball.gravity <= player2.y + player2.height && 
        ball.x + ball.width + ball.speed >= player2.x && 
        ball.y + ball.gravity > player2.y) || 
        (ball.y + ball.gravity > player1.y && 
        ball.x + ball.speed <= player1.x + player1.width)){
            ball.speed = ball.speed * -1.2;
            console.log(ball.speed)
        } else if (ball.x + ball.speed < player1.x){
            score2 += 1;
            console.log(score2);
            ball.x = (canvas.width / 2) + 100;
            ball.y += ball.gravity;
            ball.speed = ball.speed * -1;
            ball.speed = 1
        } else if (ball.x + ball.speed > player2.x){
            score1 += 1;
            console.log(score1);
            ball.x = (canvas.width / 2) - 100;
            ball.y += ball.gravity;
            ball.speed = ball.speed * -1;
            ball.speed = -1
        }
    drawElements();
}

//draw elements
function drawElement(element){
    context.fillStyle = element.color;
    context.fillRect(element.x, element.y, element.width, element.height);
}
drawElement(player1);
drawElement(player2);
drawElement(ball);

function drawElements(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawElement(player1);
    drawElement(player2);
    drawElement(ball);
    diplayScore1();
    diplayScore2();
}

//loop the game
function loop(){
    ballBounce();
    window.requestAnimationFrame(loop);
}
loop();