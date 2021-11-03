

const W = innerWidth; 
const H = innerHeight; 

let t = 0; 

function setup(){
    createCanvas(W, H); 
}
function draw(){
    background(0); 
    
    
    
    const RAD = 2; 
    const step = 2 * RAD + 1; 

    for (let x = 0; x < W; x += step){
        circle(x, getPosY(x, t), RAD); 
    }   

    t++; 
}

function getPosY(posX, t){
    const A = 100; 
    const w = 0.01; 

    
    let y = A * sin(t * w + posX ) + H/2; 
     return y; 
 }

