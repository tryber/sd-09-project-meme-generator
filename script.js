// Texto
const text = document.querySelector('#text-input');
text.addEventListener('input', function () {
  document.querySelector('#meme-text').innerHTML = text.value;
});

// Imagem
function insertImageWidthHeight(file, fileURL) {
  const image = new Image();

  // Defina o retorno da string Base64 do FileReader como origem.
  image.src = file;

  // Obtém a altura e a largura do arquivo e altera o tamanho do container.
  image.onload = function () {
    const height = this.height;
    const width = this.width;

    document.getElementById('meme-image').src = fileURL;
    document.getElementById('meme-image-container').style.width = `${width}px`;
    document.getElementById('meme-image-container').style.height = `${height}px`;
  };
}

document.querySelector('#meme-insert').addEventListener('change', function (event) {
  // Check image width and height before upload with Javascript
  // https://stackoverflow.com/questions/8903854/check-image-width-and-height-before-upload-with-javascript

  const fileUpload = event.target;
  const reader = new FileReader();

  // Lê o conteúdo do arquivo de imagem.
  reader.readAsDataURL(fileUpload.files[0]);
  reader.onload = function (e) {
    insertImageWidthHeight(e.target.result, URL.createObjectURL(event.target.files[0]));
  };
});

// Bordas
function removeAllBorderClass(element) {
  if (element.classList.contains('fire') || element.classList.contains('water') || element.classList.contains('earth')) {
    element.classList.remove('fire');
    element.classList.remove('water');
    element.classList.remove('earth');
  }
}

function changeBorder(type) {
  const element = document.getElementById('meme-image-container');
  element.style.border = '';

  removeAllBorderClass(element);

  if (type === 'fire') {
    element.classList.add('fire');
  }

  if (type === 'water') {
    element.classList.add('water');
  }

  if (type === 'earth') {
    element.classList.add('earth');
  }
}

document.querySelector('#fire').addEventListener('click', function () {
  changeBorder('fire');
});

document.querySelector('#water').addEventListener('click', function () {
  changeBorder('water');
});

document.querySelector('#earth').addEventListener('click', function () {
  changeBorder('earth');
});

// Miniaturas
document.querySelector('#meme-1').addEventListener('click', function () {
  insertImageWidthHeight('imgs/meme1.png', 'imgs/meme1.png');
});

document.querySelector('#meme-2').addEventListener('click', function () {
  insertImageWidthHeight('imgs/meme2.png', 'imgs/meme2.png');
});

document.querySelector('#meme-3').addEventListener('click', function () {
  insertImageWidthHeight('imgs/meme3.png', 'imgs/meme3.png');
});

document.querySelector('#meme-4').addEventListener('click', function () {
  insertImageWidthHeight('imgs/meme4.png', 'imgs/meme4.png');
});
