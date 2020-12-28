// Selectors | Seletores

const textInput = document.querySelector('#text-input');
const fileInput = document.querySelector('#meme-insert');
const textImage = document.querySelector('#meme-text');

const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');

// Functions | Funções

function insertTextImage() {
  const text = textInput.value;
  textImage.innerText = text;
}

function insertImage(event) {
  const img = document.querySelector('#meme-image');
  const imgs = document.querySelectorAll('.img-ready');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = function () {
    URL.revokeObjectURL(img.src);
  };

  for (let index = 0; index < 4; index += 1) {
    if (event.target) {
      imgs[index].style.border = '';
      imgs[index].classList.remove('selected');
    }
  }
}

function fireBorder() {
  const imgContainer = document.querySelector('#meme-image-container');
  const selected = document.querySelector('.selected');
  imgContainer.style.border = '3px dashed red';
  if (selected) {
    selected.style.border = imgContainer.style.border;
  }
}

function waterBorder() {
  const imgContainer = document.querySelector('#meme-image-container');
  const selected = document.querySelector('.selected');
  imgContainer.style.border = '5px double blue';
  if (selected) {
    selected.style.border = imgContainer.style.border;
  }
}

function earthBorder() {
  const imgContainer = document.querySelector('#meme-image-container');
  const selected = document.querySelector('.selected');
  imgContainer.style.border = '6px groove green';
  if (selected) {
    selected.style.border = imgContainer.style.border;
  }
}

function addSelectedClass(event) {
  const imgBorder = document.querySelector('.memeImageContainer').style.border;
  const imgs = document.querySelectorAll('.img-ready');
  imgs.forEach((img) => {
    img.style.border = '';
    img.classList.remove('selected');
  });
  event.target.style.border = imgBorder;
  event.target.classList.add('selected');
}

function imageSelect() {
  const img = document.querySelector('#meme-image');
  const imgs = document.querySelectorAll('.img-ready');
  for (let index = 0; index < imgs.length; index += 1) {
    imgs[index].addEventListener('click', function (event) {
      document.querySelector('#meme-insert').value = '';
      img.src = event.target.src;
    });
    imgs[index].addEventListener('click', addSelectedClass);
  }
}
imageSelect();

// Event Listeners | Eventos

textInput.addEventListener('input', insertTextImage);
fileInput.addEventListener('change', insertImage);
btnFire.addEventListener('click', fireBorder);
btnWater.addEventListener('click', waterBorder);
btnEarth.addEventListener('click', earthBorder);
