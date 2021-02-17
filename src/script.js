function listenToTextInput() {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');

  textInput.addEventListener('keyup', () => {
    memeText.innerText = textInput.value;
  });
}

function listenToCustomButtons() {
  const customButtonsNodeList = document.querySelectorAll(
    '#custom-buttons button',
  );
  const memeImageContainer = document.querySelector('#meme-image-container');

  customButtonsNodeList[0].addEventListener('click', () => {
    memeImageContainer.style.border = '1px double red';
  });

  customButtonsNodeList[1].addEventListener('click', () => {
    memeImageContainer.style.border = '1px ridge blue';
  });

  customButtonsNodeList[2].addEventListener('click', () => {
    memeImageContainer.style.border = '1px dashed green';
  });
}

function listenToMemeInsert() {
  const memeInsert = document.querySelector('#meme-insert');
  const image = document.querySelector('#meme-image img');

  memeInsert.addEventListener('change', () => {
    image.src = URL.createObjectURL(memeInsert.files[0]);
  });
}

function listenToProntos() {
  const prontos = document.querySelector('#prontos');
  const image = document.querySelector('#meme-image img');

  prontos.addEventListener('click', (event) => {
    image.src = event.target.src;
  });
}

function windowLoad() {
  listenToTextInput();
  listenToCustomButtons();
  listenToMemeInsert();
  listenToProntos();
}

window.onload = windowLoad();
