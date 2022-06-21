//Propiedas del background-image

const img = new Image();
img.src = '../Images/mapa2.jpeg';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Movimiento al eje x

const backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

//Propiedas de movimiento de mi canvas

  draw: function() {
    ctx.drawImage(this.img, this.x, 0, 1000, 500);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0, 1000, 500);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0, 1000, 500);
    }
  }
};

//clickOn OJO

function miCanvas() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  backgroundImage.move();
  requestAnimationFrame(miCanvas);
}

img.onload = miCanvas;