let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d"); // Version

let bird = new Image();
let bg = new Image(); // background
let fg = new Image();//foreground
let fg1 = new Image();//foreground
let fg2 = new Image();//foreground
let fg3 = new Image();//foreground
let pipeUp = new Image();//Obstakle
let pipeBottom = new Image(); // Obstakle

//Sound files
let fly = new Audio();
let score_audio = new Audio();
let lose = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";
lose.src = "audio/lose.mp3";

bird.src = "img/flappy_bird_bird.png";
bg.src = "img/backgrounds.png";
fg.src = "img/flappy_bird_fg.png";
fg1.src = "img/flappy_bird_fg.png";
fg2.src = "img/flappy_bird_fg.png";
fg3.src = "img/flappy_bird_fg.png";
pipeUp.src = "img/flappy_bird_pipeUp.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";


let gap = 90;


//Jump
document.addEventListener("keydown", moveUp)

function moveUp(){
    yPos -= 25;
    
    fly.play();
}


//Create blocks
let pipe=[];
console.log(cvs.width)
pipe[0] = {
    x:cvs.width,
    y:0

}

//Bird Position
let xPos = 100;
let yPos = 150;
let grav = 1.5;
let score = 0;


function draw(){
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x , pipe[i].y);
        // console.log(pipe[i].x)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if(pipe[i].x == 420){
            pipe.push({
                x:cvs.width,
                y:Math.floor(Math.random() *pipeUp.height) - pipeUp.height
            })
        }

       

        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || (yPos + bird.height >= cvs.height - fg.height || yPos + bird.height <= 0)) {
                bird.src = "img/dead.png";
                bird.width = 100;
                bird.height = 100;
                // setInterval( location.reload(), 10000);
                lose.play();          
                setTimeout(function(){location.reload();},200);
                // Перезагрузка страницы
            }

        if(pipe[i].x == 90){
            score++;
            score_audio.play();
        }
    }
    
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(fg1, 306, cvs.height - fg.height);
    ctx.drawImage(fg2, 612, cvs.height - fg.height);
    ctx.drawImage(fg3, 918, cvs.height - fg.height);
    ctx.drawImage(bird,xPos , yPos,30,30);

    yPos += grav;
    ctx.fillStyle = "#000";
    ctx.font="24px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20)
    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;