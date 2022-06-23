const container = document.querySelector(".container")

const canvas2 = document.getElementById('canvas');
const ctx2 = canvas2.getContext('2d');

const fondo = new Image()
fondo.src = '../Images/escenario1.jpeg'

class backgroundCanvas {
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas2.width
        this.height = canvas2.height
        this.image = new Image()
        this.image.src = "../Images/escenario1.jpeg"
    }
    draw(){
        ctx2.drawImage(this.image,this.x,this.y,this.width,this.height)
       // console.log(this.image,this.x,this.y,this.width,this.height) //Vericamos si en realidad se están mandando los parámetros en el método
    }
}

let background = new backgroundCanvas()

fondo.onload = function() {
    background.draw()
}


//crear metodos: perder / ganar
//primero meter texto
//crear ctx mandar un fillText y los estilos para el texto (Game Over)
//crear sus funciones: perder y ganar
//dibujar dentro del background - mandarlo llamar para mostrarlo mandando el metodo
//mandar llamar variable del fondo. ... metodo(perder)(ganar)