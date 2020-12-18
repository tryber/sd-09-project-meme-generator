const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const borderSettings = document.getElementById('border-settings');
const readyMadeMemes = document.getElementById('ready-made-memes');
const memeImages = {
  'meme-1': 'meme1',
  'meme-2': 'meme2',
  'meme-3': 'meme3',
  'meme-4': 'meme4',
};

function insertMemeText() {
  const text = textInput.value;
  memeText.innerText = text;
}

function changeMemeImage(imageURL) {
  memeImage.src = imageURL;
}

function insertMemeImage(event) {
  // Reference: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  const image = URL.createObjectURL(event.target.files[0]);
  changeMemeImage(image);
}

function changeBorder(event) {
  if (event.target.classList.contains('button')) {
    const eventClassName = event.target.id;
    memeContainer.className = `meme-image-container ${eventClassName}-border`;
  }
}

function getImage(idName) {
  return `imgs/${memeImages[idName]}.png`;
}

function insertReadyMemeImage(event) {
  if (event.target.classList.contains('thumbnail')) {
    const idName = event.target.parentNode.id;
    changeMemeImage(getImage(idName));
  }
}

function setReadyMadeMemesImages() {
  const thumbsDivs = readyMadeMemes.children;
  for (let index = 0; index < thumbsDivs.length; index += 1) {
    const idName = thumbsDivs[index].id;
    thumbsDivs[index].firstElementChild.src = getImage(idName);
  }
}

function setMemeInsertEvents() {
  memeInsert.addEventListener('change', insertMemeImage);
}

function setTextInputEvents() {
  textInput.addEventListener('keyup', insertMemeText);
}

function setBorderSettingsEvents() {
  borderSettings.addEventListener('click', changeBorder);
}

function setReadyMadeMemesEvents() {
  readyMadeMemes.addEventListener('click', insertReadyMemeImage);
}

window.onload = function () {
  setMemeInsertEvents();
  setTextInputEvents();
  setBorderSettingsEvents();
  setReadyMadeMemesImages();
  setReadyMadeMemesEvents();
};
