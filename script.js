let getText = document.querySelector('#text-input');
let putText = document.querySelector('#meme-text')

function changeText() {
putText.innerHTML = getText.value;
}

getText.addEventListener('input', changeText);


/*
const putImage = document.querySelector('#meme-insert');

function changeImage() {
const getImage = document.querySelector('#meme-image');
getImage.style.backgroundImage = `url(${putImage.value})`;
}


putImage.addEventListener('input', changeImage);
*/


const putImage = document.querySelector('#meme-insert')

function changeImage(event) {
  let image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files [0]);
}

putImage.addEventListener('input', changeImage);
