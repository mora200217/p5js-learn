

const W = innerWidth; 
const H = innerHeight; 

function setup(){
    createCanvas(W, H); 
}
function draw(){
    background(0); 
    
    const step = 0.2; 
    const RAD = 20; 

    for (let x = 0; x < W; x += step){
        circle(x, getPosY(x), RAD); 
    }   
}

function getPosY(posX){
   
    return 10; 
}

