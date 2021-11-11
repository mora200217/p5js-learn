
const W = innerWidth; 
const H = innerHeight; 

let pos; 
let vel; 
let ace; 
let t = 0; 
let posA; 
let r; 
let v; 
let a; 

let factor = 1; 

function setup(){
    
    createCanvas(W, H); 
    background(0); 
 
    posA = createVector(200,400); 

    r = createVector(W/2, H/2); 
    v = createVector(3, -5); 
    a = createVector(0, -0.1); 
}
// Sumar velocidad a la posicion en cada instante 
// Cambiando la posicion en cada segundo o instante 





function draw(){

    /*
    background(0); 
    // Capitulo I : Puntos y lineas. 
    fill(0, 255, 0); // verde
    circle(posA.x, posA.y ,10); 

    fill(255, 0, 0);  // Rojo
    circle(300, 100 ,10); 

    // line([x1, y1], [x2, y2]); 
    stroke(255); 
    line(posA.x, posA.y, 300, 100); 

    posA.set(mouseX, mouseY); // Set -> Act u

    // Suma 
    suma(); 

    */ 

    //CAIDA LIBRE 

    // elemneto 
    circle(r.x, r.y, 10); 

    r.add(v); 
    v.add(a); 
// 50 100 150 200 250
    if (t % 200 == 0){
        
        console.log(a); 
    } 
    a.set(0, 2 * sin(0.2 * t))
    console.log(t); 
    
    t++; 
}

function suma(){
    let a = createVector(1, 2); 
    let b = createVector(3, 1); 

    let c = a.copy().add(b); // a = (4, 3), c = (4, 3)

    console.log( c)
}