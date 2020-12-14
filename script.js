function changeMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = event.target.value;
}

function changeMemeImg(event) {
  const memeImgDiv = document.querySelector('#meme-image');
  if (event.type === 'click') {
    memeImgDiv.src = event.target.src;
  }
  if (event.type === 'input') {
    memeImgDiv.style.backgroundImage = `url(${event.target.value})`;
  }
}

function fireBorder() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.border = '3px dashed red';
}

function waterBorder() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.border = '5px double blue';
}

function earthBorder() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.border = '6px groove green';
}

function addListerners() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', changeMemeText);
  const imgFile = document.querySelector('#meme-insert');
  imgFile.addEventListener('input', changeMemeImg);
  const fireButton = document.querySelector('#fire');
  fireButton.addEventListener('click', fireBorder);
  const waterButton = document.querySelector('#water');
  waterButton.addEventListener('click', waterBorder);
  const earthButton = document.querySelector('#earth');
  earthButton.addEventListener('click', earthBorder);
  const meme1 = document.querySelector('#meme-1');
  meme1.addEventListener('click', changeMemeImg);
  const meme2 = document.querySelector('#meme-2');
  meme2.addEventListener('click', changeMemeImg);
  const meme3 = document.querySelector('#meme-3');
  meme3.addEventListener('click', changeMemeImg);
  const meme4 = document.querySelector('#meme-4');
  meme4.addEventListener('click', changeMemeImg);
}

function addStyles() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.width = '300px';
  memeImgContainer.style.height = '300px';
  memeImgContainer.style.border = '1px black solid';
  memeImgContainer.style.backgroundColor = 'white';
  memeImgContainer.style.marginTop = '15px';
  memeImgContainer.style.position = 'relative';
  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.width = '100%';
  memeImgDiv.style.height = '100%';
  memeImgDiv.style.backgroundRepeat = 'no-repeat';
  memeImgDiv.style.backgroundSize = '100% 100%';
  memeImgDiv.style.overflow = 'hidden';
  const memeText = document.querySelector('#meme-text');
  memeText.style.bottom = '0';
  memeText.style.position = 'absolute';
  memeText.style.overflow = 'hidden';
  memeText.style.margin = 0;
  memeText.style.textShadow = '5px 5px 5px black';
  memeText.style.fontSize = '30px';
  memeText.style.color = 'white';
  memeText.style.wordBreak = 'break-all';
  const textInput = document.querySelector('#text-input');
  textInput.maxLength = '60';
}

function addBorderStyles() {
  const borderButtons = document.querySelector('#border-buttons');
  borderButtons.style.width = '300px';
  borderButtons.style.textAlign = 'center';
  borderButtons.style.marginTop = '5px';
  borderButtons.style.fontSize = '25px';
  const fireButton = document.querySelector('#fire');
  fireButton.innerText = 'Fire';
  fireButton.style.backgroundColor = 'red';
  fireButton.style.marginRight = '-6px';
  const waterButton = document.querySelector('#water');
  waterButton.innerText = 'Water';
  waterButton.style.backgroundColor = 'blue';
  waterButton.style.marginRight = '-6px';
  const earthButton = document.querySelector('#earth');
  earthButton.innerText = 'Earth';
  earthButton.style.backgroundColor = 'green';
}

function addMemeSugestionsStyles() {
  const memeSugestions = document.querySelector('#meme-sugestions');
  memeSugestions.style.display = 'inline-block';
  memeSugestions.style.textAlign = 'center';
  memeSugestions.style.marginLeft = '40px';
  const memes = [];
  memes[0] = document.querySelector('#meme-1');
  memes[1] = document.querySelector('#meme-2');
  memes[2] = document.querySelector('#meme-3');
  memes[3] = document.querySelector('#meme-4');
  for (let index = 0; index < memes.length; index += 1) {
    memes[index].style.backgroundRepeat = 'no-repeat';
    memes[index].style.backgroundSize = '100% 100%';
    memes[index].style.height = '40px';
    memes[index].style.margin = '5px';
    memes[index].style.width = '40px';
  }
}

window.onload = function () {
  addListerners();
  addStyles();
  addBorderStyles();
  addMemeSugestionsStyles();
};
