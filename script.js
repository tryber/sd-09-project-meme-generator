function generateMemeText() {
  const input = document.getElementById('text-input');
  const span = document.getElementById('meme-text');
  input.addEventListener('keyup', function () {
    span.innerText = input.value;
    span.style.zIndex = 10;
  });
}

function addImg() {
  const imgInput = document.getElementById('img');
  const inputBtn = document.getElementById('meme-insert');
  const memeImg = document.getElementById('meme-image');


  inputBtn.addEventListener('click', function () {
    memeImg.src = URL.createObjectURL(imgInput.files[0]);
  });
}

function fireBorder() {
  const fireBtn = document.getElementById('fire');
  const memeCont = document.getElementById('meme-image-container');
  fireBtn.addEventListener('click', function () {
    memeCont.className = 'container red';
  });
}

function waterBorder() {
  const waterBtn = document.getElementById('water');
  const memeCont = document.getElementById('meme-image-container');
  waterBtn.addEventListener('click', function () {
    memeCont.className = 'container blue';
  });
}

function earthBorder() {
  const earthBtn = document.getElementById('earth');
  const memeCont = document.getElementById('meme-image-container');
  earthBtn.addEventListener('click', function () {
    memeCont.className = 'container green';
  });
}

function meme() {
  const memes = document.getElementsByClassName('mini-meme');
  const memeImg = document.getElementById('meme-image');
  for (let index = 0; index < memes.length; index += 1) {
    memes[index].addEventListener('click', function (event) {
      memeImg.src = event.target.src;
    });
  }
}

window.onload = function () {
  generateMemeText();
  addImg();
  fireBorder();
  waterBorder();
  earthBorder();
  meme();
};
