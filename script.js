function generateInputSection() {
  // Label do input
  const myLabel = document.createElement('label');
  myLabel.innerText = 'Insira o seu texto aqui > ';
  document.querySelector('.inputContainer').appendChild(myLabel);

  // aqui temos o input de texto
  const textInput = document.createElement('input');
  textInput.id = 'text-input';
  textInput.maxLength='60';
  textInput.type = 'text';
  textInput.placeholder = 'Alguma ideia boa?';
  document.querySelector('.inputContainer').appendChild(textInput);

  // input para fazer o upload da imagem
  const imageInput = document.createElement('input');
  imageInput.type = 'file';
  imageInput.id = 'meme-insert';
  imageInput.className = 'img-btn';
  imageInput.accept = 'image/png, image/jpeg';
  imageInput.addEventListener('change', function(self){
    document.querySelector('#meme-image').src = self.target.value;
  })
  document.querySelector('.inputContainer').appendChild(imageInput);
}

generateInputSection();

function generateMemeSection() {
  // um simples p para receber o texto do 'text-input'
  const memeTextParagrath = document.createElement('p');
  memeTextParagrath.id = 'meme-text';
  document.querySelector('.memeContainer').appendChild(memeTextParagrath);

  const memeImage = document.createElement('img');
  memeImage.id = 'meme-image';
  document.querySelector('.memeContainer').appendChild(memeImage);
}

generateMemeSection();

document.querySelector('#text-input').addEventListener('input',function (self) {
  document.querySelector('#meme-text').innerText = self.target.value;
});

// importado do stackoverflow
// https://stackoverflow.com/questions/31236172/change-an-image-from-a-file-input-without-sending-the-form

var inp = document.querySelector('#meme-insert');
inp.addEventListener('change', function(e){
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(){
        document.querySelector('#meme-image').removeAttribute('style');
        document.getElementById('meme-image').src = this.result;
        };
    reader.readAsDataURL(file);
    },false);

function generateBorderButtons() {
  const buttonName = ['fire', 'water', 'earth'];
  for (let index = 0; index < 3; index += 1){
    const newButton = document.createElement('button');
    newButton.id = buttonName[index];
    newButton.className = buttonName[index];
    newButton.style.backgroundImage = `url(./imgs/${buttonName[index]}.jpg)`;
    document.querySelector('.other-buttons-container').appendChild(newButton);
  }
}

generateBorderButtons();


function mandaMemetoContainer(self){
  document.querySelector('#meme-image').removeAttribute('src');
  document.querySelector('#meme-image').style.backgroundImage = self.target.style.backgroundImage;
}



function generateExamples() {
  
  for (let index = 0; index < 4; index += 1){
    const miniMeme  = document.createElement ('div');
    miniMeme.id = `meme-${index+1}`;
    miniMeme.style.backgroundImage = `url(./imgs/meme${index+1}.png)`;
    miniMeme.addEventListener('click',mandaMemetoContainer);
    document.querySelector('.exampleContainer').appendChild(miniMeme);
  }
}

generateExamples();
