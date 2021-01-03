function generateMemeText() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', function () {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = textInput.value;
  });
}

function generateMemeImage() {
  const fileInput = document.querySelector('#meme-insert');
  fileInput.addEventListener('change', function (memeImage) {
    const image = document.querySelector('#meme-image');
    image.src = URL.createObjectURL(memeImage.target.files[0]);
  });
}

function addFireBorder() {
  const memeContainer = document.querySelector('#meme-image-container');
  memeContainer.style.border = '3px dashed red';
}

function addWaterBorder() {
  const memeContainer = document.querySelector('#meme-image-container');
  memeContainer.style.border = '5px double blue';
}

function addEarthBorder() {
  const memeContainer = document.querySelector('#meme-image-container');
  memeContainer.style.border = '6px groove green';
}

function useSampleImage() {
  const galleryImage = document.querySelectorAll('.sample-image');
  for (let index = 0; index < galleryImage.length; index += 1) {
    galleryImage[index].addEventListener('click', function () {
      const image = document.querySelector('#meme-image');
      image.src = galleryImage[index].src;
    });
  }
}

window.onload = function () {
  const fireButton = document.querySelector('#fire');
  const waterButton = document.querySelector('#water');
  const earthButton = document.querySelector('#earth');

  fireButton.addEventListener('click', addFireBorder);
  waterButton.addEventListener('click', addWaterBorder);
  earthButton.addEventListener('click', addEarthBorder);

  generateMemeText();
  generateMemeImage();
  useSampleImage();
};
