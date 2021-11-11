


let ball; 
const SEP_PLAYER = 10; 
const W_PLAYER = 14; 
const H_PLAYER = 120; 

let player1; 
let player2; 

function setup(){
    noStroke(); 
    createCanvas(innerWidth, innerHeight); 

    ball = new Ball(20, innerWidth / 2, innerHeight / 2); // RAD, POSX, POSY 
    ball2 = new Ball(20, 200, 100); 
    player1 = new Player(1); 
    player2 = new Player(2); 

    frameRate(60); // FPS Frames per second  
}

function draw(){
    background(0);

    ball.appear(); 
    ball.update(); 

    ball2.appear(); 
    ball2.update(); 

    // Decoraction 
    drawLine(); 

    // Players 
    player1.appear(); 
    player2.appear(); 
    

    

    console.log(random(1, 4));  // [1, 4)
}


function drawLine(){
    rectMode(CENTER); // mandar al centro
    const rectHeight = 10; 
    const sep = rectHeight * .5; 
    for(let y = 0; y < innerHeight; y += rectHeight + sep){
        rect(innerWidth / 2, y, 5, rectHeight); // x, y, w, h
    }

}

// Pelota 

const MIN_VEL = 4; 
const MAX_VEL = 6; 




class Player{
    constructor(type){
        this.type = type ; // 1 - 2 
        this.pts = 0;
        this.y = innerHeight / 3; 

        if (type == 1){
            this.x = SEP_PLAYER; 
        }else if (type == 2){
            this.x = innerWidth - SEP_PLAYER  - W_PLAYER; 
        }
    }

    appear(){
        rectMode(CORNER); 
        rect(this.x, this.y,  W_PLAYER, H_PLAYER); 
    }
    
}
class Ball{
    constructor(RAD, x, y){
        // Parametros 
        this.RAD = RAD; 
        this.pos = createVector(x, y); 
        this.vel = createVector( pow(-1, round(random(1, 100))) * random(MIN_VEL, MAX_VEL), pow(-1, round(random(1, 100))) *  random(MIN_VEL, MAX_VEL)); 
        //this.vel = createVector(0,-0.10); 
        //this.ace = createVector(0, 0.981)
    }

    /*
        Este método se encarga 
        de dibujar la pelota. Solamente 
        dibujarla. 
    */ 
    appear(){
        fill(255); // Color blanco 
        circle(this.pos.x, this.pos.y, 2 * this.RAD); // Dibujo mi Pelota
    }

    update(){
        this.pos.add(this.vel); 
        // this.vel.add(this.ace); 
        let coef = 1; 
        if (this.pos.y + this.RAD > innerHeight || this.pos.y - this.RAD < 0){
          
            this.vel.mult(createVector(coef, -coef))
        }

        if (this.pos.x + this.RAD > innerWidth || this.pos.x - this.RAD < 0){
            this.vel.mult(createVector(-coef, coef))
        }
    }
}