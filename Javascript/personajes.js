// --------- IMAGENES DE PERSONAJES ---------


var miCanvas = document.getElementById("miCanvas");
var ctx = miCanvas.getContext('2d');

// --------- GATO CIBERPUNK ---------

var img1 = new Image();
img1.src = '../Images/kisspng-cat-steampunk-robot-felidae-science-fiction-cyber-punk-5ae1d0de92aad6.2616667015247485106008.png';
ctx.drawImage(img1, 50, 80, 40, 60);

img1.onload = function(){
    ctx.drawImage(img1, 450, 325, 300, 171);
  }

// --------- SEÑORITA Y ---------

var img2 = new Image();
img2.src = '../Images/pngwing.com.png';
ctx.drawImage(img2, 120, 420);

img2.onload = function(){
    ctx.drawImage(img2, 380, 50, 500, 464);
  }

// --------- GATO ROBOT ---------

var img3 = new Image();
img3.src = '../Images/kisspng-whiskers-cat-kitten-robot-warriors-little-cat-5ae77bf2152f73.5452126415251199860868.png';
ctx.drawImage(img3, 340, 420);

img3.onload = function(){
    ctx.drawImage(img3, 250, 350, 150, 155);
  }

// --------- SOLDADO ---------

var img4 = new Image();
img4.src = '../Images/kisspng-pixel-art-animation-soldier-pixel-art-5ac406df0183d6.6252865715227962550062.png';
ctx.drawImage(img4, 620, 340);

img4.onload = function(){
    ctx.drawImage(img4, 0, 380, 150, 130);
  }