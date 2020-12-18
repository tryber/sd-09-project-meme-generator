/* Requisito 1 - input com id = text-input;
- elemento de container para imagem e texto gerado a partir do input com id = meme-image-container;
- criar elemento dentro do container para exibir o texto do input, com id = meme-text;
- mostrar o texto mesmo sem imagem gerada;
*/

function addTextToImg() {
  const inputText = document.querySelector('#text-input');
  inputText.addEventListener('input', (event) => {
    const textOutput = document.querySelector('#meme-text');
    textOutput.innerText = event.target.value;
  });
}

addTextToImg();

/* Requisito 2
- dentro do container deve ter um elemento para receber a imagem com id = meme-image;
- o input de imagem deve ter um id = meme-insert (fora do container);
- a imagem deve ocupar todo o espaço do container;
- o texto inserido deve ficar sobre a imagem;
*/

/* Requisito 3
- o container deve ter uma moldura padrão de 1px solid black;
- o elemento da imagem, deve ter fundo branco;
- a imagem deve ocupar 100% do container;
*/

function addImageToContainer() {
  const myInputImg = document.querySelector('#meme-insert');
  myInputImg.addEventListener('input', (event) => {
    const myImage = document.querySelector('#meme-image');
    myImage.src = URL.createObjectURL(event.target.files[0]);
  });
}

addImageToContainer();


/* Requisito 4
- o texto (meme-text) deve ter uma sombra preta 5px na horizontal;
- 5 px na vertical e um raio de desfoque de 5px;
- font-size: 30px;
- color: white;
**FEITO NO DOCUMENTO STYLE.CSS**
*/

/* Requisito 5
- Limite a qtde. max. de caracteres no elemento text-input (60);
**FEITO NO DOCUMENTO INDEX.HTML**
*/

/* Requisito 6 - Bonus
- adicionar 3 botoes para trocar as bordas do meme;
- as bordas devem estar contidas no container meme-image-container;
- cada botao deve ter cor de fundo igual a cor da borda que será estilizada;
- botao 1: id=fire deverá estilizar a borda com a cor vermelha, 3px e tipo dashed;
- botao 2: id=water, borda azul, 5px, double;
- botao 3: id=earth, borda verde, 6px, groove;
*/

function setEarthBorder() {
  const earthButton = document.querySelector('#earth');
  earthButton.addEventListener('click', () => {
    const memeImageContainer = document.querySelector('#meme-image-container');
    memeImageContainer.style.border = '6px groove green';
  });
}

setEarthBorder();

function setFireBorder() {
  const fireButton = document.querySelector('#fire');
  fireButton.addEventListener('click', () => {
    const memeImageContainer = document.querySelector('#meme-image-container');
    memeImageContainer.style.border = '3px dashed red';
  });
}

setFireBorder();

function setWaterBorder() {
  const waterButton = document.querySelector('#water');
  waterButton.addEventListener('click', () => {
    const memeImageContainer = document.querySelector('#meme-image-container');
    memeImageContainer.style.border = '5px double blue';
  });
}

setWaterBorder();

/* Requisito 7 - Bonus
- adicionar 4 imagens pré prontas de memes famosos;
- cada imagem deve ter um id=meme-(numero representante);
- as imagens devem ter extesnsao .png e dever ser armazenadas numa pasta com nome images;
*/

function setMemeImageToContainer() {
  const memeContainer = document.querySelector('.meme-container');
  memeContainer.addEventListener('click', (event) => {
    const memeImageContainer = document.querySelector('#meme-image');
    memeImageContainer.src = event.target.src;
  });
}

setMemeImageToContainer();
