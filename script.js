var side = 1024;
var steps = 6;
var stepSize = side/steps; //vím, že to nevýchází beze zbytku, ale z nějakého důvodu mi to dělá neplechu pouze ve firefoxu, takže to takhle asi nechám. Původně jsem chtěl udělat šachovnici 8x8.
function setup() {
	createCanvas(side, side);
  noLoop()
}

function preload() {
  img1 = loadImage('pic/gaugan.jpg');
  img2 = loadImage('pic/cesta.jpg');
}

function draw() {
	background('#FF00FF');
  for (let i = 0;i<steps;i++){
    for (let t = 0;t<steps;t++){
      let img;
      //if ((i+t)%2==0){ //pro případ, že bych někdy chtěl pravidelnou mřížku
      if (round(random(10))%2==0){
        img = img1;
      } else {
        img = img2;
      }
      image(img,i*stepSize,t*stepSize,stepSize,stepSize,i*stepSize,t*stepSize,stepSize,stepSize);
    }
  }
}

