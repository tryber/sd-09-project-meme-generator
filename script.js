const emptyDiv = document.querySelector('#meme-image-container');
const emptyText = document.querySelector('#meme-text');
const textToAdd = document.querySelector('#text-input');

function geneMemeText() {
  document.querySelector('span').innerText = textToAdd.value;
}

function genMemeImage() {
  const uploadedImage = document.querySelector('#meme-image').files[0];
  console.log(uploadedImage)
  const image = document.createElement('img');
  image.src = URL.createObjectURL(uploadedImage);
  emptyDiv.appendChild(image);  
}

document.querySelector('#meme-image').addEventListener('change', genMemeImage);
document.querySelector('#text-input').addEventListener('keyup', geneMemeText);
