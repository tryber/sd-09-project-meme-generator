const inputContainer = document.getElementById('input-container');
const memeContainer = document.getElementById('meme-image-container');
const buttonsContainer = document.querySelector('.buttons-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

function handleUpdateValue(event) {
  const text = document.getElementById('meme-text');
  text.innerText = event.target.value;
}

const generateInputText = function () {
  const labelElement = document.createElement('label');
  labelElement.for = 'text-input';
  labelElement.innerText = 'Texto:';
  const inputTextElement = document.createElement('input');
  inputTextElement.id = 'text-input';
  inputTextElement.maxLength = '60';
  inputTextElement.addEventListener('input', handleUpdateValue);
  inputContainer.appendChild(labelElement);
  inputContainer.appendChild(inputTextElement);
};

function handleFileSelected(event) {
  const file = event.target.files;
  const img = document.getElementById('meme-image');
  img.src = window.URL.createObjectURL(file[0]);
}

const generateInputFile = function () {
  const labelElement = document.createElement('label');
  labelElement.for = 'meme-insert';
  labelElement.innerText = 'Foto:';
  const inputFileElement = document.createElement('input');
  inputFileElement.type = 'file';
  inputFileElement.id = 'meme-insert';
  inputFileElement.addEventListener('change', handleFileSelected);
  inputContainer.appendChild(labelElement);
  inputContainer.appendChild(inputFileElement);
};

const generateMemeImage = function () {
  const imgElement = document.createElement('img');
  imgElement.id = 'meme-image';
  memeContainer.appendChild(imgElement);
};

const generateMemeText = function () {
  const pElement = document.createElement('p');
  pElement.id = 'meme-text';
  memeContainer.appendChild(pElement);
};

const generateButton = function (id, value) {
  const button = document.createElement('button');
  button.id = id;
  button.className = 'btn';
  button.innerHTML = value;
  return button;
};

function handleChangeFireBorder() {
  memeContainer.style.border = '3px dashed red';
}

const generateButtonFire = function () {
  const buttonFire = generateButton('fire', 'Fire &#128293');
  buttonFire.addEventListener('click', handleChangeFireBorder);
  buttonsContainer.appendChild(buttonFire);
};

function handleChangeWaterBorder() {
  memeContainer.style.border = '5px double blue';
}

const generateButtonWater = function () {
  const buttonWater = generateButton('water', 'Water &#128167');
  buttonWater.addEventListener('click', handleChangeWaterBorder);
  buttonsContainer.appendChild(buttonWater);
};

function handleChangeEarthBorder() {
  memeContainer.style.border = '6px groove green';
}

const generateButtonEarth = function () {
  const buttonEarth = generateButton('earth', 'Earth &#127793');
  buttonEarth.addEventListener('click', handleChangeEarthBorder);
  buttonsContainer.appendChild(buttonEarth);
};

function hadleThumbnailClick(event) {
  const memeImg = document.getElementById('meme-image');
  memeImg.src = event.target.src;
}

const generateThumbnails = function () {
  const images = ['meme1.png', 'meme2.png', 'meme3.png', 'meme4.png'];
  for (let index = 0; index < images.length; index += 1) {
    const img = document.createElement('img');
    img.id = `meme-${index + 1}`;
    img.className = 'thumbnail';
    img.src = `imgs/${images[index]}`;
    img.addEventListener('click', hadleThumbnailClick);
    thumbnailsContainer.appendChild(img);
  }
};

window.onload = function () {
  generateInputText();
  generateMemeImage();
  generateMemeText();
  generateInputFile();
  generateButtonFire();
  generateButtonWater();
  generateButtonEarth();
  generateThumbnails();
};
