const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const changeBorder = document.querySelector('.change-border');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeImage = document.querySelector('#meme-image');
const preMadeMeme = document.querySelector('.pre-made-meme');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});
textInput.addEventListener('keypress', (tecla) => {
  if (tecla.keyCode === 13) {
    textInput.value = '';
    textInput.focus();
  }
});

memeInsert.addEventListener('change', (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

changeBorder.addEventListener('click', (event) => {
  const classes = ['fire', 'water', 'earth'];
  const classesValue = ['3px dashed red', '5px double blue', '6px groove green'];
  for (let index = 0; index < classes.length; index += 1) {
    if (memeImageContainer.style.border === classesValue[index]) {
      memeImageContainer.style.border = '1px solid black';
    } else if (event.target.className === classes[index]) {
      memeImageContainer.style.border = classesValue[index];
    }
  }
});

preMadeMeme.addEventListener('click', (event) => {
  for (let index = 1; index <= 4; index += 1) {
    if (event.target.id === `meme-${index}`) {
      memeImage.src = `imgs/meme${[index]}.png`;
    }
  }
});
