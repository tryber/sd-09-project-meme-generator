const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const btFire = document.querySelector('#fire');
const btWater = document.querySelector('#water');
const btEarth = document.querySelector('#earth');
const memeContainer = document.querySelector('#meme-image-container');
const previewMemes = document.querySelector('#preview-memes');

function addMemeText() {
  textInput.addEventListener('keyup', function () {
    memeText.innerText = textInput.value;
  });
}
addMemeText();

function addMemeImage() {
  memeInsert.addEventListener('change', function (event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function () {
      URL.revokeObjectURL(memeImage.src);
    };
  });
}
addMemeImage();

function changeBorder() {
  btFire.addEventListener('click', function () {
    memeContainer.classList.add('fire');
    memeContainer.classList.remove('water');
    memeContainer.classList.remove('earth');
  });
  btWater.addEventListener('click', function () {
    memeContainer.classList.add('water');
    memeContainer.classList.remove('earth');
    memeContainer.classList.remove('fire');
  });
  btEarth.addEventListener('click', function () {
    memeContainer.classList.add('earth');
    memeContainer.classList.remove('fire');
    memeContainer.classList.remove('water');
  });
}
changeBorder();

function previewMeme() {
  previewMemes.addEventListener('click', function (event) {
    memeImage.src = event.target.src;
  });
}
previewMeme();
