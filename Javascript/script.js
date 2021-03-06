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
    }
}

let background = new backgroundCanvas()

fondo.onload = function() {
    background.draw()
}