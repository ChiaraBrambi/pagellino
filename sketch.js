let b1, b2, button_text, valutazione;
let w, h, s, xBarra, logor;
let i = 0;
let h1, h2;

//////////////////////////////////////////////////////

function preload() {
  logor = loadImage("./logopiccolo.png"); //logo ridotto
  pagellino = loadImage("./pagellino.png");
}

///////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15); //rallenta
  h1 = 'Ecco il tuo';
  h2 = 'pagellino da tifoso';


}

/////////////////////////////////////////////////////

function draw() {
  background('#F9F9F9'); //chiaro
  //CONTATORE i DEL TEMPO
  if (frameCount % 15 == 0) { //multiplo di 50 incrementa i
    i++;
  }

  valutazione = 'Tifo ROZZO';
  w = width / 20;
  h = height / 50;

  //testo caratteristiche
  textFont('quicksand');
  textAlign(CENTER, TOP);
  textStyle(BOLD);

  //logo a destra
      image(logor, w * 18.5, h * 6, logor.width / 4.5, logor.height / 4.5);
      //testo titolo
      push();
      fill('#877B85'); //4° colore PALETTE
      textSize(25);
      text(h1, w * 10, h * 13);
      fill('#B7AEB5'); //3° PALETTE
      text(h2, w * 10, h * 15);
      textSize(15);
      text('IL VERO TIFO',  w * 10, h * 39);
      pop();

//pagellino
imageMode(CENTER)
      image(pagellino, w * 10, h * 27.5, pagellino.width / 1.7, pagellino.height / 1.7);

  button_text = 'Home';

  b1 = createButton(button_text);
  b1.position(w * 9, h * 42);
  b1.mousePressed(p);
  b1.id('startBtn');

  b2 = createButton("");
  b2.position(w, h * 4.5);
  b2.mousePressed(back);
  b2.id('pauseBtn')

  ///  contenuto pagellino

  push();

  fill('#877B85'); //4° colore PALETTE
  textSize(13);
  text(valutazione,  w * 8.3, h * 29.8);
  textAlign(LEFT, TOP);
  textSize(10);
  text('SCIARPATA',  w * 10, h * 23);
  text('TROMBETTA',  w * 10, h * 26);
  text('SCIARPATA',  w * 10, h * 29);
  text('CORDINAZIONE',  w * 10, h * 31);
  pop();


}
//////////////////////////////////////////////////////////////////////////////////////////////////


function p() {
  window.open('../indexPausa.html', '_self');
}

function back() {
  window.open('../indexPausa.html', '_self');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
