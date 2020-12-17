function createInputTxt() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'text-input';
  input.placeholder = 'Escreva o meme aqui';
  const inputForm = document.querySelector('#text');
  inputForm.appendChild(input);
}
createInputTxt();

function createContainerTxtImg() {
  const container = document.querySelector('#meme-image-container');
  const inputTxt = document.querySelector('#text-input');

  inputTxt.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (inputTxt.value.length > 0) {
        const p = document.createElement('p');
        p.id = 'meme-text';
        p.innerText = inputTxt.value;
        container.appendChild(p);
      }
    }
  });
}
createContainerTxtImg();

function createBtnDeleteTxt() {
  const btn = document.createElement('button');
  btn.id = 'delete-text';
  btn.innerText = 'apaga texto';
  btn.style.marginLeft = '5px';
  btn.style.padding = '3.5px'
  const btnPai = document.querySelector('#text');
  btnPai.appendChild(btn);

  btn.addEventListener('click', function (e) {
    const p = document.querySelector('#meme-text');
    const paiP = document.querySelector('#meme-image-container');
    if (p) {
      e.preventDefault();
      const inputTxt = document.querySelector('#text-input');
      inputTxt.value = '';
      paiP.removeChild(p);
    }
  });
}
createBtnDeleteTxt();

function uploadImage() {
  const container = document.querySelector('#meme-image-container');
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.style.marginTop = '15px'
  container.appendChild(img);

  const inputForm = document.querySelector('#img');
  const inputImg = document.createElement('input');
  inputImg.type = 'file';
  inputImg.id = 'meme-insert';
  inputImg.style.marginTop = '5px';
  inputForm.appendChild(inputImg);

  inputImg.addEventListener('change', function (e) {
    // https://www.youtube.com/watch?v=xqIVrjKhfaU
    if (this.files && this.files[0]) {
      img.src = URL.createObjectURL(this.files[0]);
    }
  });
}
uploadImage();

function btnMarginColor(color, text) {
  const btnColor = document.createElement('button');
  btnColor.innerText = text;
  btnColor.style.marginLeft = '5px';
  btnColor.style.marginTop = '10px'
  btnColor.style.padding = '3.5px';
  btnColor.style.background = color;
  btnColor.style.color = 'white';
  const btnColorPai = document.querySelector('#margin-colors');
  btnColorPai.appendChild(btnColor);

  btnColor.addEventListener('click', function (e) {
    const container = document.querySelector('#meme-image-container');
    container.style.borderColor = color;
  });
}
btnMarginColor('red', 'Borda vermelha');
btnMarginColor('blue', 'Borda azul');
btnMarginColor('green', 'Borda verde');
btnMarginColor('yellow', 'Borda amarela');
btnMarginColor('black', 'Original');