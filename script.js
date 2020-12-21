function setImage(event) {
  const imageContainer = document.querySelector('#meme-image');
  imageContainer.src = URL.createObjectURL(event.target.files[0]);
}

function setText(event) {
  const inputValue = event.target.value;
  const text = document.querySelector('#meme-text');
  text.innerText = inputValue;
}

function setInputEvent() {
  const input = document.querySelector('#text-input');
  input.addEventListener('input', setText);
  const inputImage = document.querySelector('#meme-insert');
  inputImage.addEventListener('change', setImage);
}

window.onload = function () {
  setInputEvent();
};
