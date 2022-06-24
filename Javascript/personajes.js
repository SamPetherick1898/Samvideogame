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

// IdFrame

let IdFrame;

  
///////////////////////// CLASES ////////////////////////


 // --------- Clase bala ---------

 class Bala {
    constructor(x, y, img, ctx){
        this.x = x
        this.y = y
        this.img = img
        this.ctx = ctx
    }

    moverAdelante(){
        this.x += 1
    }

    dibujarse(){
        this.ctx.drawImage(this.img, this.x, this.y, 50,20)
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
        this.kills = 0
    }

    recibirDaño(daño){
        this.vida -= daño
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

const soldierA = new Soldado(600, 450, ctx, img4, 130, 140)

movimientoEnMapa()

function movimientoEnMapa(){
document.addEventListener("keydown", (event) => {
    switch(event.key){
        case " ":
            if(balas.length < 1){
            const nuevaBala = soldierA.disparar(soldierA.x + 100, soldierA.y + 40, balita);
            balas.push(nuevaBala)
            }
            break;
        case "ArrowLeft":  
            soldierA.moverAtras();
            break;
        case "ArrowRight":
            soldierA.moverAdelante()
            break;
    }
})
}

let frame = 0

function actualizarJuego(){
    frame++
    ctx.clearRect(0, 0, 1200, 600)
    background.draw()
    soldierA.dibujarse()
    if(frame % 100 == 0){
        crearEnemigos()
    }
    balas.forEach((bala, indexbala) => {
        bala.moverAdelante()
        bala.dibujarse()
        enemigos.forEach((enemigo, index) => {
            if(enemigo.x < bala.x){
                enemigos.splice(index, 1)
                balas.splice(indexbala, 1)
                soldierA.kills++
            }
        })
    }) 

    mostrarDatos(soldierA.vida, soldierA.kills)
   IdFrame = requestAnimationFrame(actualizarJuego)

    enemigos.forEach(enemigo =>{
        enemigo.moverAtras()
        enemigo.dibujarse()
        if(enemigo.x == soldierA.x){
            cancelAnimationFrame(IdFrame)
            let canvasShow2 = document.getElementById("canvas")
            canvasShow2.classList.add("oculto2")

            const pos = [2, 3, 4]
            const index = Math.floor(Math.random() * pos.length)
            console.log(index)
            let gameOver2 = document.getElementById("gameover" + pos[index])
            gameOver2.classList.remove('oculto2')
            console.log(gameOver2)
        } 
    })

    if(soldierA.kills === 10){
        cancelAnimationFrame(IdFrame)
        let canvasShow = document.getElementById("canvas")
        canvasShow.classList.add("oculto")
        let gameOver = document.getElementById("gameover")
        gameOver.classList.remove('oculto')
    }  

} 

actualizarJuego()

// --------- Clase de los gatos ---------

class Enemigo1 extends Soldado{
    constructor(x, y, ctx, image){
        super(x, y, ctx, image, 150, 100)
    }
    moverAtras(){
        this.x -= 2
    }
}

// --------- Crear enemigos ---------

function crearEnemigos(){
    const aleatorio = Math.floor(Math.random() * 60)
        let claseDeEnemigo = gatito1
        if (aleatorio % 2 === 0){
            claseDeEnemigo = gatito2
        }
        const enemigo = new Enemigo1(1200, 450, ctx, claseDeEnemigo)
        enemigos.push(enemigo)
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

function mostrarDatos(vida, kills){
    ctx.font = "30px Arial"
    ctx.fillStyle = "white";
    ctx.fillText(`Vida: ${vida}`, 550, 30)
    ctx.fillText(`Muertes: ${kills}`, 700, 30)
}