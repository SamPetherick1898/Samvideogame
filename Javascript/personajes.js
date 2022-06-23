///////////////////////// IMAGENES DE PERSONAJES ////////////////////////


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// --------- GATO CIBERPUNK ---------

let gatito1 = new Image();
gatito1.src = '../Images/kisspng-cat-steampunk-robot-felidae-science-fiction-cyber-punk-5ae1d0de92aad6.2616667015247485106008.png';

// --------- GATO ROBOT ---------

let gatito2 = new Image();
gatito2.src = '../Images/kisspng-whiskers-cat-kitten-robot-warriors-little-cat-5ae77bf2152f73.5452126415251199860868.png';

// --------- SOLDADO ---------

let img4 = new Image();
img4.src = '../Images/kisspng-pixel-art-animation-soldier-pixel-art-5ac406df0183d6.6252865715227962550062.png';


// --------- bala ---------

let balita = new Image();
balita.src = '../Images/bala.png';

///////////////////////// ALMACENES ////////////////////////

//gato 1

const enemigos = []

// balas

const balas = []

  
///////////////////////// CLASES ////////////////////////


 // --------- Clase gatos ---------

/*class Gatos {
    constructor(x, y, img, ctx, widthImg, heightImg){
        this.x = x
        this.y = y
        this.vida = 100
        this.velocidad = 3
        this.daño = 50
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
} */


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

const soldierA = new Soldado(0, 450, ctx, img4, 130, 140)

movimientoEnMapa()

function movimientoEnMapa(){
document.addEventListener("keydown", (event) => {
    switch(event.key){
        case " ":
            const nuevaBala = soldierA.disparar(Soldado.x + 50, Soldado.y + 10, balita);
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



function actualizarJuego(){
    ctx.clearRect(0, 0, 1200, 600)
    console.log("actualizando")
    //const crearEnemigo = new gatoEnemigo1(0, 350, img1)
    background.draw()
    soldierA.dibujarse()

/* enemigos.forEach((enemigos, index) => {
        if (enemigos.x === Soldado.x + 50 && enemigos.y === Soldado.y){
            Soldado.recibirDaño(50)
            enemigos.splice(index, 1)
        }                                   //si coloco esto desaparece el soldado
    })*/

    mostrarDatos(Soldado.vida, Soldado.x, Soldado.y)
    requestAnimationFrame(actualizarJuego)
    //crearEnemigos()
} //actualizacion del juego para el dibujo del juego

actualizarJuego()

// --------- Clase de los gatos ---------

class Enemigo1 extends Soldado{
    constructor(x, y, ctx, image){
        super(x, y, ctx, image)
    }
}

function crearEnemigos(){
const aleatorio = Math.floor(Math.random() * 60)
const numeros = [1, 24, 35, 47, 56]
if (numeros.includes(aleatorio)){
    console.log("agrega enemigo")
    let claseDeEnemigo = gatito1
    if (aleatorio % 2 === 0){
        claseDeEnemigo = gatito2
    }
    const enemigo = new Enemigos(860, 450, ctx, claseDeEnemigo)
    enemigos.push(enemigo)
}
}


balas.forEach((bala, indexBala) => {
    bala.x += 2
    bala.dibujarse()

    enemigos.forEach((enemigo, indexEnemigo) => {
        if (enemigo.x === bala.x || enemigo.x === bala.x + 1 || enemigo.x === bala.x - 1) {
            enemigos.splice(indexEnemigo, 1)
            balas.splice(indexBala, 1)
            soldierA.kills++
        }
    })
})


// --------- Mostrar datos ---------

function mostrarDatos(vida, x, y){
    ctx.font = "30px Arial"
    ctx.fillStyle = "white";
    ctx.fillText(vida, 550, 30)
}