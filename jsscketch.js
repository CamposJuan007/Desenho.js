function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
  if(mouseIsPressed) {
    stroke("red");// cor da linha 
    fill("yellow");// cor do fundo
    rect(mouseX,mouseY,10,10);// criando o retangulo
  }
}
