// Escreve o texto na imagem
function getMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = event.target.value;
}

// Upload da imagem
function getMemeImage(event) {
  const imageContainer = document.querySelector('#meme-image');
  imageContainer.src = event.target.value;
  // imageContainer.style.backgroundImage = "url('https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141225682')";
}

// Borda fire
function borderStyleFire() {
  const memeImageContainer = document.querySelector('#meme-image-container');
  memeImageContainer.style.border = 'dashed 3px red';
}

// Borda earth
function borderStyleEarth() {
  const memeImageContainer = document.querySelector('#meme-image-container');
  memeImageContainer.style.border = 'groove 6px green';
}

// Borda water
function borderStyleWater() {
  const memeImageContainer = document.querySelector('#meme-image-container');
  memeImageContainer.style.border = 'double 5px blue';
}

// Cria meme com imagens pre-selecionadas
function readyMemeImage(event) {
  const imageContainer = document.querySelector('#meme-image');
  imageContainer.src = event.target.src;
  // const fristPart = "url('";
  // const thirdPart = "')";
  // imageContainer.style.backgroundImage = fristPart + event.target.src + thirdPart;
}

function listeners() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', getMemeText);
  const memeImage = document.querySelector('#meme-insert');
  memeImage.addEventListener('input', getMemeImage);
  const fireButton = document.querySelector('#fire');
  fireButton.addEventListener('click', borderStyleFire);
  const earthButton = document.querySelector('#earth');
  earthButton.addEventListener('click', borderStyleEarth);
  const waterButton = document.querySelector('#water');
  waterButton.addEventListener('click', borderStyleWater);
  const memeReadyContainer = document.querySelector('#meme-ready-container');
  memeReadyContainer.addEventListener('click', readyMemeImage);
}

function buttonsStyle() {
  const fireButton = document.querySelector('#fire');
  fireButton.style.backgroundColor = 'red';
  const earthButton = document.querySelector('#earth');
  earthButton.style.backgroundColor = 'green';
  const waterButton = document.querySelector('#water');
  waterButton.style.backgroundColor = 'blue';
}

window.onload = function () {
  buttonsStyle();
  listeners();
};
