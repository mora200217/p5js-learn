
// Simpre siempre siemrpe ! DOS FUNCIONES 

// Nacimiento del hijo pródigo  (1 SOLA VEZ)

const DIA = 20; // px 

let x = 200; // px 
let y = 200; // px 

let t = 0; 
let Amplitude = 150; 
const w = 0.01;  

const W = innerWidth; 
const H = innerHeight; 
function setup(){
    console.log("Nací :v"); 

    // BUSCAR <MAIN> 
    createCanvas(W, H);  // Px
    background(0);  // RGB - ESCALA DE GRIS  0 - 255

    x = W / 2; 
    y = H / 2;    
}

// Que corra el hijo pródigo  
function draw(){
    background(0); // PINTO TODO 
    
    dibujarTrayectoria(); 
    dibujarBall(); 
    actualizarBall(); 

    // Cambio de amplitud
    let factor = 5; 

    if (keyIsPressed){
        if (keyCode === UP_ARROW){
            Amplitude += factor; 
        }else if (keyCode === DOWN_ARROW){
            Amplitude -= factor; 
        }
    } 



    

}

function dibujarTrayectoria(){
    noFill(); 
    stroke(255, 0, 0); 
    circle(W/2, H/2, Amplitude * 2); 
}

function dibujarBall(){
    noStroke(); 
    fill(255); 
    circle(x, y, DIA);  // DIBUJO CIRCULO 
}

function actualizarBall(){
    x = W/2 + Amplitude * cos(w * t); 
    y = H/2 + Amplitude * sin(w * t); 

    t = mouseX; 
}

