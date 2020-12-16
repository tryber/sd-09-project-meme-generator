// Inserindo texto no container
function insertTextEvent() {
  const inputBox = document.querySelector('#text-input');
  inputBox.addEventListener('input', function () {
    const container = document.querySelector('#meme-image-container');
    if (document.querySelector('#meme-text')) {
      const oldText = document.querySelector('#meme-text');
      container.removeChild(oldText);
    }
    const newText = document.createElement('p');
    newText.innerText = inputBox.value;
    newText.id = 'meme-text';
    newText.className = 'text-style';
    container.appendChild(newText);
  });
}

insertTextEvent();

// Inserindo imagem no container
function insertImageEvent() {
  const inputImage = document.querySelector('#meme-insert');
  inputImage.addEventListener('change', function () {
    const container = document.querySelector('#meme-image-container');
    if (document.querySelector('#meme-image')) {
      const oldImage = document.querySelector('#meme-image');
      container.removeChild(oldImage);
    }
    const newImage = document.createElement('img');
    newImage.id = 'meme-image';
    newImage.className = 'meme-image-style';
    newImage.src = URL.createObjectURL(inputImage.files[0]);
    newImage.alt = 'Meme image';
    container.appendChild(newImage);
  });
}

insertImageEvent();

// Evento do botão do fogo
function fireBtnEven() {
  const fireBtn = document.querySelector('#fire');
  fireBtn.addEventListener('click', function () {
    const container = document.querySelector('#meme-image-container');
    if (container.className.includes('fire-border')) {
      container.className = 'black-border';
    } else {
      container.className = 'fire-border';
    }
  });
}

fireBtnEven();

// Evento do botão da água
function waterBtnEvent() {
  const waterBtn = document.querySelector('#water');
  waterBtn.addEventListener('click', function () {
    const container = document.querySelector('#meme-image-container');
    if (container.className.includes('water-border')) {
      container.className = 'black-border';
    } else {
      container.className = 'water-border';
    }
  });
}

waterBtnEvent();

// Evento do botão da terra
function earthBtnEvent() {
  const earthBtn = document.querySelector('#earth');
  earthBtn.addEventListener('click', function () {
    const container = document.querySelector('#meme-image-container');
    if (container.className.includes('earth-border')) {
      container.className = 'black-border';
    } else {
      container.className = 'earth-border';
    }
  });
}

earthBtnEvent();

// Evento de escolher base
function chooseBase() {
  const memeBases = document.querySelectorAll('.img-wrap');
  for (let index = 0; index < memeBases.length; index += 1) {
    memeBases[index].addEventListener('click', function (event) {
      const chosenBase = event.target;
      const mainContainer = document.querySelector('#meme-image-container');
      if (document.querySelector('#meme-image')) {
        const oldImage = document.querySelector('#meme-image');
        mainContainer.removeChild(oldImage);
      }
      const newImage = document.createElement('img');
      newImage.src = chosenBase.src;
      newImage.alt = chosenBase.alt;
      newImage.id = 'meme-image';
      newImage.className = 'meme-image-style';
      mainContainer.appendChild(newImage);
    });
  }
}

chooseBase();
