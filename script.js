function createInputText() {
  const inputFather = document.querySelector('.input-section');
  const inputInsert = document.createElement('input');
  inputInsert.id = 'text-input';
  inputInsert.placeholder = 'Escreva aqui';
  inputInsert.maxLength = '60';
  inputInsert.type = 'text';
  inputFather.appendChild(inputInsert);
}
createInputText();

function textMeme() {
  const textInput = document.querySelector('#text-input');
  const textImg = document.querySelector('#meme-text');
  if (textInput.value === '') {
    textImg.innerHTML = '';
    return;
  }
  const texto = textInput.value;
  textImg.innerHTML = texto;
}

const localInput = document.querySelector('#text-input');
localInput.addEventListener('keyup', textMeme);

function createInputButton() {
  const inputFather = document.querySelector('.file-section');
  const inputInsert = document.createElement('input');
  inputInsert.id = 'meme-insert';
  inputInsert.type = 'file';
  inputInsert.accept = 'image/png, image/jpeg';
  inputFather.appendChild(inputInsert);
}
createInputButton();

function createImage() {
  const imageFather = document.querySelector('#meme-image-container');
  const image = document.createElement('img');
  image.id = 'meme-image';
  image.className = 'meme-image';
  imageFather.appendChild(image);
}
createImage();

function createInputImage(origin) {
  const imageInsert = document.querySelector('#meme-image');
  imageInsert.src = URL.createObjectURL(origin.target.files[0]);
}

const buttonFile = document.querySelector('#meme-insert');
buttonFile.addEventListener('input', createInputImage);

function borderFire() {
  const border = document.querySelector('.container');
  border.style.border = '3px dashed red';
}

function borderWater() {
  const border = document.querySelector('.container');
  border.style.border = '5px double blue';
}

function borderEarth() {
  const border = document.querySelector('.container');
  border.style.border = '6px groove green';
}

function createButtons(id, clss, name) {
  const buttonFather = document.querySelector('.buttons-section');
  const button = document.createElement('button');
  button.id = id;
  button.className = clss;
  button.innerText = name;
  buttonFather.appendChild(button);
}

createButtons('fire', 'fire-button', 'Fire');
createButtons('water', 'water-button', 'Water');
createButtons('earth', 'earth-button', 'Earth');

const buttonFire = document.querySelector('#fire');
buttonFire.addEventListener('click', borderFire);

const buttonWater = document.querySelector('#water');
buttonWater.addEventListener('click', borderWater);

const buttonEarth = document.querySelector('#earth');
buttonEarth.addEventListener('click', borderEarth);

function memeReady(id, memeX) {
  const father = document.querySelector('.image-section');
  const meme = document.createElement('img');
  meme.src = memeX;
  meme.id = id;
  meme.className = 'meme-ready';
  father.appendChild(meme);
}

function changeMeme(origin) {
  const imageInsert = document.querySelector('#meme-image');
  imageInsert.src = origin.target.src;
}

memeReady('meme-1', 'imgs/meme1.png');
const meme01 = document.querySelector('#meme-1');
meme01.addEventListener('click', changeMeme);
memeReady('meme-2', 'imgs/meme2.png');
const meme02 = document.querySelector('#meme-2');
meme02.addEventListener('click', changeMeme);
memeReady('meme-3', 'imgs/meme3.png');
const meme03 = document.querySelector('#meme-3');
meme03.addEventListener('click', changeMeme);
memeReady('meme-4', 'imgs/meme4.png');
const meme04 = document.querySelector('#meme-4');
meme04.addEventListener('click', changeMeme);
