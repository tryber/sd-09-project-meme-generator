const textInput = document.getElementById('text-input');
const inputMeme = document.getElementById('meme-insert');
const textMeme = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const imageContainer = document.getElementById('meme-image-container');

function memetext() {
  textInput.addEventListener('keyup', function () {
    textMeme.innerHTML = textInput.value;
  });
}

function loadFile() {
  inputMeme.addEventListener('change', function () {
    image.src = URL.createObjectURL(inputMeme.files[0]);
  });
}

function borderFire() {
  const fire = document.getElementById('fire');
  fire.addEventListener('click', function () {
    imageContainer.style.border = '3px dashed red';
  });
}

function borderWater() {
  const water = document.getElementById('water');
  water.addEventListener('click', function () {
    imageContainer.style.border = '5px double blue';
  });
}

function borderEarth() {
  const earth = document.getElementById('earth');
  earth.addEventListener('click', function () {
    imageContainer.style.border = '6px groove green';
  });
}

function addImageContainer() {
  const secMeme = document.getElementById('memes-picture');
  secMeme.addEventListener('click', function (event) {
    image.src = event.target.src;
  });
}

// chamadas
memetext();
addImageContainer();
loadFile();
borderFire();
borderWater();
borderEarth();
