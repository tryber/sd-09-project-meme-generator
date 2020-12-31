function insertText() {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = textInput.value;
}

function displayMeme() {
  const memeInsert = document.querySelector('#meme-insert');
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = '';
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
}

function changeBorder(evt) {
  const clickedButtonId = evt.target.id;
  const memeImageContainer = document.querySelector('#meme-image-container');
  if (clickedButtonId !== 'button-container') {
    memeImageContainer.className = `image-container ${clickedButtonId}`;
  }
}
// calcular a proporção da imagem
// multiplicar o lado maior que tomará o tamanho de 500px pela proporção calculada

function displayReadyMadeImg(evt) {
  const imgSelected = evt.target;
  const imgSelectedId = evt.target.id;
  const memeImage = document.querySelector('#meme-image');
  if (imgSelectedId !== 'ready-made-img-container') {
    memeImage.src = '';
    memeImage.src = imgSelected.src;
  }
}

window.onload = function () {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', insertText);
  const memeInsert = document.querySelector('#meme-insert');
  memeInsert.addEventListener('change', displayMeme);
  const buttonContainer = document.querySelector('#button-container');
  buttonContainer.addEventListener('click', changeBorder);
  const readyMadeImgContainer = document.querySelector('#ready-made-img-container');
  readyMadeImgContainer.addEventListener('click', displayReadyMadeImg);
};

// limite máximo de caracteres 60: An element with position: absolute; is positioned relative t
