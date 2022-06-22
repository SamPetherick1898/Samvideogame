///////////////////////// IMAGENES DE PERSONAJES ////////////////////////


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// --------- GATO CIBERPUNK ---------

let img1 = new Image();
img1.src = '../Images/kisspng-cat-steampunk-robot-felidae-science-fiction-cyber-punk-5ae1d0de92aad6.2616667015247485106008.png';

// --------- GATO ROBOT ---------

let img3 = new Image();
img3.src = '../Images/kisspng-whiskers-cat-kitten-robot-warriors-little-cat-5ae77bf2152f73.5452126415251199860868.png';

// --------- SOLDADO ---------

let img4 = new Image();
img4.src = '../Images/kisspng-pixel-art-animation-soldier-pixel-art-5ac406df0183d6.6252865715227962550062.png';


// --------- bala ---------

let img5 = new Image();
img5.src = '../Images/bala.png';

///////////////////////// ALMACENES ////////////////////////

//gato 1

const enemigo1 = []

//gato 2

const enemigo2 = []


// balas

  const balas = []
  
  const balaImg = new Image()
  balaImg.src = '../Images/bala.png'


  balas.forEach( (bala) =>{
    bala.x += 5
    bala.dibujarse()
  })



  
///////////////////////// CLASES ////////////////////////


 // --------- Clase gatos ---------

class Gatos {
    constructor(x, y, img, ctx, widthImg, heightImg){
        this.x = x
        this.y = y
        this.vida = 100
        this.velocidad = 3
        this.daño = 50
        this.ctx = ctx
        this.img = img;
        this.widthImg = widthImg
        this.heightImg = heightImg
    }

    moverAdelante(){
        this.x -= 150
    }

    recibirDaño(daño){
        this.vida -= daño
        console.log(daño)
    }

    vivo(){
        if(this.vida > 0){
            return true
        }
        return false
    }

    dibujarse(){
        this.ctx.drawImage(this.img, this.x, this.y, this.widthImg, this.heightImg)
    }
}


 // --------- Clase bala ---------

 class Bala {
    constructor(x, y, img, ctx){
        this.x = x
        this.y = y
        this.img = img
        this.ctx = ctx
    }

    moverAdelante(){
        this.x -= 100
    }

    dibujarse(){
        this.ctx.drawImage(this.img, this.x, this.y, 100,200)
    }
}


   // --------- Clase soldado ---------

   class Soldado {
    constructor(x, y, ctx, img, widthImg, heightImg){
        this.x = x
        this.y = y
        this.vida = 50
        this.velocidad = 1
        this.daño = 50
        this.ctx = ctx
        this.img = img;
        this.widthImg = widthImg
        this.heightImg = heightImg
        //this.soldierSelf()
    }

    recibirDaño(daño){
        this.vida -= daño
        console.log(daño)
    }

    moverAdelante(){
        this.x += 30
    }

    moverAtras(){
        this.x -= 30
    }

    disparar(x, y, img){
        const bala = new Bala(x, y, img, ctx)
        return bala
    }

    vivo(){
        if(this.vida > 0){
            return true
        }
        return false
    }

    dibujarse(){
        this.ctx.drawImage(this.img, this.x, this.y, this.widthImg, this.heightImg)
    }

}

//Movimiento soldado

const soldierA = new Soldado(0, 450, ctx, img4, 120, 140)

movimientoEnMapa()

function movimientoEnMapa(){
document.addEventListener("keydown", (event) => {
    switch(event.key){
        case " ":
            const nuevaBala = soldierA.disparar(Soldado.x + 50, Soldado.y + 10, balaImg);
            balas.push(nuevaBala)
            break;
        case "ArrowLeft":  
            soldierA.moverAtras();
            console.log("atras")
            break;
        case "ArrowRight":
            soldierA.moverAdelante()
            console.log("adelante");
            break;
    }
})
}

//Gatos Ramdom

const gatoA = new Gatos(0, 450, ctx, img1, 160, 180)

function movimientoGato1A(){

}

/*function moverMapa(){
    console.log("MapaMapa")
    const soldadoc = new soldadoC(10, 50, ctx)
    requestAnimationFrame(moverMapa)
}*/


function actualizarJuego(){
    ctx.clearRect(0, 0, 1200, 600)
    console.log("actualizando")
    background.draw()
    soldierA.dibujarse()
    requestAnimationFrame(actualizarJuego)
} //actualizacion del juego para el dibujo del juego

actualizarJuego()

// --------- Clase de los gatos ---------

class gatoC extends Gato{
    constructor(x, y, ctx, img, widthImg, heightImg){
        super(x, y, ctx, img, widthImg, heightImg)
    }
}

  //Mostrar algo tener un arreglo con la url de las imagenes y a partir del DOM (donde se tocan) 
  //crear una funcion que dispare el modal para acceder a la imagen que tenga el src a alguna de las imaganes del array math.ramdom.length
  //modal con la imagen ()
