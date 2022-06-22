// --------- IMAGENES DE PERSONAJES ---------


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

// --------- GATO CIBERPUNK ---------

var img1 = new Image();
img1.src = '../Images/kisspng-cat-steampunk-robot-felidae-science-fiction-cyber-punk-5ae1d0de92aad6.2616667015247485106008.png';
ctx.drawImage(img1, 50, 80, 40, 60);

img1.onload = function(){
    ctx.drawImage(img1, 450, 450, 280, 151);
  }

/* --------- SEÑORITA Y ---------

var img2 = new Image();
img2.src = '../Images/pngwing.com.png';
ctx.drawImage(img2, 120, 420);

img2.onload = function(){
    ctx.drawImage(img2, 380, 280, 500, 464);
  } */

// --------- GATO ROBOT ---------

var img3 = new Image();
img3.src = '../Images/kisspng-whiskers-cat-kitten-robot-warriors-little-cat-5ae77bf2152f73.5452126415251199860868.png';
ctx.drawImage(img3, 340, 420);

img3.onload = function(){
    ctx.drawImage(img3, 250, 450, 150, 155);
  }

// --------- SOLDADO ---------

var img4 = new Image();
img4.src = '../Images/kisspng-pixel-art-animation-soldier-pixel-art-5ac406df0183d6.6252865715227962550062.png';
ctx.drawImage(img4, 620, 340);

img4.onload = function(){
    ctx.drawImage(img4, 0, 450, 160, 160);
  }

                        // --------- Clases de personajes ---------


   // --------- Clase soldado ---------

   class Soldado {
    constructor(x, y, ctx){
        this.x = x
        this.y = y
        this.vida = 50
        this.velocidad = 1
        this.daño = 50
        this.ctx = ctx
        this.img = img; //mi soldado tiene img4
        this.soldierSelf()
    }

    recibirDaño(daño){
        this.vida -= daño
        console.log(daño)
    }

    moverAdelante(){
        this.x += 10
    }

    moverAtras(){
        this.x -= 10
    }

    disparar(){
        //this.
        console.log("dispara")
    }

    vivo(){
        if(this.vida > 0){
            return true
        }
        return false
    }

    soldierSelf(){
        //this.ctx.fillRect(this.x, this.y, 30, 30)
        this.ctx.drawImage(this.img, this.x, this.y, 40, 40)
    }

}

function moverMapa(){
    console.log("MapaMapa")
    const soldadoc = new soldadoC(10, 50, ctx)
    requestAnimationFrame(moverMapa)
} 


// --------- Clase de los gatos ---------


class Gatos {
    constructor(x, y){
        this.x = x
        this.y = y
        this.vida = 100
        this.velocidad = 10
        this.daño = 50
    }

    recibirDaño(daño){
        this.vida -= daño
        console.log(daño)
    }

    moverAdelante(){
        this.x -= 5
    }

    vivo(){
        if(this.vida > 0){
            return true
        }
        return false
    }

}

  //Mostrar algo tener un arreglo con la url de las imagenes y a partir del DOM (donde se tocan) 
  //crear una funcion que dispare el modal para acceder a la imagen que tenga el src a alguna de las imaganes del array math.ramdom.length
  //modal con la imagen ()
