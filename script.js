const inputText = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');
const showcase = document.getElementById('showcase');

function memeTextUpdate() {
  const text = inputText.value;
  memeText.innerText = text;
}

inputText.addEventListener('keyup', memeTextUpdate);

function memeImageUpdate() {
  memeImg.src = URL.createObjectURL(inputImg.files[0]);
}

inputImg.addEventListener('change', memeImageUpdate);

function firefy() {
  container.className = 'fire-border';
}
function waterify() {
  container.className = 'water-border';
}
function earthify() {
  container.className = 'earth-border';
}

fireBtn.addEventListener('click', firefy);
waterBtn.addEventListener('click', waterify);
earthBtn.addEventListener('click', earthify);

function memeShowcase(event) {
  memeImg.src = event.target.src;
}

showcase.addEventListener('click', memeShowcase);
