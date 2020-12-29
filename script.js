const input = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const memesEx = document.querySelector('#memes-exemplos');

function showText() {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = input.value;
}
input.addEventListener('input', showText);

function uploadImage() {
  const memeImage = document.querySelector('#meme-image');
  memeImage.style.backgroundImage = `url(${inputImage.value})`;
}
inputImage.addEventListener('input', uploadImage);

function changeToFireStyle() {
  memeContainer.style.border = 'dashed red 3px';
}
fireButton.addEventListener('click', changeToFireStyle);

function changeToWaterStyle() {
  memeContainer.style.border = 'double blue 5px';
}
waterButton.addEventListener('click', changeToWaterStyle);

function changeToEarthStyle() {
  memeContainer.style.border = 'groove green 6px';
}
earthButton.addEventListener('click', changeToEarthStyle);

function chooseImages(event) {
  if (event.target.src !== undefined) {
    const memeImage = document.querySelector('#meme-image');
    memeImage.src = event.target.src;
  }
}
memesEx.addEventListener('click', chooseImages);
