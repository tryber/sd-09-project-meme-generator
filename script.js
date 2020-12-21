function setImageToContainer() {
    const imageContainer = document.getElementById('meme-image');
    imageContainer.src = URL.createObjectURL(fileInput.files[0]);
}

function setTextToImage() {
    const textContent = document.querySelector('.meme-text');
    textContent.innerText = document.getElementById('text-input').value;
}

const inputTextButton = document.getElementById('add-text');
inputTextButton.addEventListener('click', setTextToImage);
const fileInput = document.getElementById('meme-insert');
fileInput.addEventListener('change', setImageToContainer);