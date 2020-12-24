const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const inputFile = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const exampleMeme = document.querySelector('#meme-example');

function changeTextMeme() {
  inputText.addEventListener('input', () => (memeText.innerHTML = inputText.value));
}

function changeImgMeme() {
  inputFile.addEventListener('change', (event) => (memeImg.src = URL.createObjectURL(event.target.files[0])));
}

function backgroundImgMeme(urlImg) {
  memeContainer.style.backgroundImg = `url(${urlImg})`;
}

function fireButton() {
  const fire = document.querySelector('#fire');
  fire.addEventListener('click', () => (memeContainer.style.border = '3px dashed red'));
}

function waterButton() {
  const water = document.querySelector('#water');
  water.addEventListener('click', () => (memeContainer.style.border = '5px double blue'));
}

function earthButton() {
  const earth = document.querySelector('#earth');
  earth.addEventListener('click', () => (memeContainer.style.border = '6px groove green'));
}

function selectedMeme() {
  exampleMeme.addEventListener('click', (event) => (memeImg.src = event.target.src));
}

changeTextMeme();
changeImgMeme();
backgroundImgMeme(memeImg);
fireButton();
waterButton();
earthButton();
selectedMeme();
