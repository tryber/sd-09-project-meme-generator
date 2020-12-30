const input = document.querySelector('.input');
const memeText = document.querySelector('#meme-text');
const insertImage = document.querySelector('#meme-insert');
const meme = document.querySelector('#meme-image');
const buttons = document.querySelector('.buttons');
const memeContainer = document.querySelector('#meme-image-container');
const imgs = document.querySelector('.imgContainer');

function setTextMeme() {
  memeText.innerText = input.value;
}

function changeMeme(event) {
  meme.src = URL.createObjectURL(event.target.files[0]);
}

function compareClass(event) {
  if (event.target.id === 'fire') {
    memeContainer.classList.add('fire');
  }
  if (event.target.id === 'water') {
    memeContainer.classList.add('water');
  }
  if (event.target.id === 'earth') {
    memeContainer.classList.add('earth');
  }
}

function borderClick(event) {
  if (event.target.className !== 'buttons') {
    memeContainer.className = '';
    memeContainer.classList.add('mainImage');
    compareClass(event);
  }
}

function setPreMemes(event) {
  if (!event.target.classList.contains('imgContainer')) {
    meme.src = event.target.src;
  }
}

function setEvent() {
  input.addEventListener('keyup', setTextMeme);
  insertImage.addEventListener('change', changeMeme);
  buttons.addEventListener('click', borderClick);
  imgs.addEventListener('click', setPreMemes);
}

setEvent();
