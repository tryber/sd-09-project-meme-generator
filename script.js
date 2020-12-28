const input = document.querySelector('#text-input');
input.setAttribute('maxLength', 60);
const memeContainer = document.querySelector('#meme-image-container');
memeContainer.style.border = '1px solid black';
const memeText = document.querySelector('#meme-text');
const memeImages = document.querySelector('#meme-image');
const inputFile = document.querySelector('#meme-insert');
const buttons = document.querySelector('#buttons');
const getImage = document.querySelector('.meme-image').src;
const selected = document.querySelectorAll('.meme');
const imageMemes = document.querySelector('#ready-memes');

function memePhrase() {
  input.addEventListener('input', function () {
    memeText.innerHTML = input.value;
  });
}
memePhrase();

// SOURCE:
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
function memeImage() {
  inputFile.addEventListener('change', function (event) {
    memeImages.src = URL.createObjectURL(event.target.files[0]);
  });
}
memeImage();

function backgroundImage(urlImage) {
  const img = `url(${urlImage})`;
  memeContainer.style.backgroundImage = img;
}
backgroundImage(getImage);

function firetBorderButton() {
  const fire = document.createElement('button');
  fire.id = 'fire';
  fire.className = 'fire button';
  fire.innerHTML = 'Fire';
  buttons.appendChild(fire);
  fire.addEventListener('click', function () {
    memeContainer.style.border = '3px dashed red';
  });
}
firetBorderButton();

function waterBorderButton() {
  const water = document.createElement('button');
  water.id = 'water';
  water.className = 'water button';
  water.innerHTML = 'Water';
  buttons.appendChild(water);
  water.addEventListener('click', function () {
    memeContainer.style.border = '5px double blue';
  });
}
waterBorderButton();

function earthBorderButton() {
  const earth = document.createElement('button');
  earth.id = 'earth';
  earth.className = 'earth button';
  earth.innerHTML = 'Earth';
  buttons.appendChild(earth);
  earth.addEventListener('click', function () {
    memeContainer.style.border = '6px groove green';
  });
}
earthBorderButton();

function selectedActivate() {
  imageMemes.addEventListener('click', function (event) {
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected');
    }
    if (event.target.classList.contains('meme')) {
      event.target.classList.add('selected');
    }
  });
}
selectedActivate();

function getReadyMeme() {
  imageMemes.addEventListener('click', function (event) {
    const classActivate = event.target.src;
    if (event.target.classList.contains('selected')) {
      memeImages.src = classActivate;
    }
  });
}
getReadyMeme();
