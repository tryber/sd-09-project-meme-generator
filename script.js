function generateTextInputBox() {
  const container = document.getElementById('inputs');
  const textBox = document.createElement('input');
  textBox.type = 'text';
  textBox.id = 'text-input';
  textBox.className = 'text-input';
  textBox.placeholder = 'Type your meme text here';
  textBox.maxLength = '60';

  container.appendChild(textBox);
  textBox.addEventListener('input', function () {
    const memeText = document.getElementById('meme-text');
    memeText.innerText = textBox.value;
  });
}

function generateImageUploadButton() {
  const container = document.getElementById('inputs');
  const uploadImageButton = document.createElement('input');
  uploadImageButton.type = 'file';
  uploadImageButton.id = 'meme-insert';
  uploadImageButton.className = 'button-style';

  container.appendChild(uploadImageButton);
  uploadImageButton.addEventListener('input', function (selectedImage) {
    const memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(selectedImage.target.files[0]);
  });
}

function generateFireButton(container, memeContainer) {
  const fireButton = document.createElement('button');
  fireButton.id = 'fire';
  fireButton.className = 'button-fire';
  fireButton.innerText = 'Fire Border';

  container.appendChild(fireButton);
  fireButton.addEventListener('click', function () {
    memeContainer.style.border = '3px dashed red';
  });
}

function generateWaterButton(container, memeContainer) {
  const borderTwoButton = document.createElement('button');
  borderTwoButton.id = 'water';
  borderTwoButton.className = 'button-water';
  borderTwoButton.innerText = 'Water Border';

  container.appendChild(borderTwoButton);
  borderTwoButton.addEventListener('click', function () {
    memeContainer.style.border = '5px double blue';
  });
}

function generateEarthButton(container, memeContainer) {
  const borderThreeButton = document.createElement('button');
  borderThreeButton.id = 'earth';
  borderThreeButton.className = 'button-earth';
  borderThreeButton.innerText = 'Earth Border';

  container.appendChild(borderThreeButton);
  borderThreeButton.addEventListener('click', function () {
    memeContainer.style.border = '6px groove green';
  });
}

function generateBordersButtons() {
  const container = document.querySelector('.button-container');
  const memeContainer = document.getElementById('meme-image-container');
  generateFireButton(container, memeContainer);
  generateWaterButton(container, memeContainer);
  generateEarthButton(container, memeContainer);
}

function generateMemeText() {
  const container = document.getElementById('meme-image-container');
  const memeText = document.createElement('p');
  memeText.id = 'meme-text';
  memeText.className = 'meme-text';

  container.appendChild(memeText);
}

function generateMemeImage() {
  const container = document.getElementById('meme-image-container');
  const memeImage = document.createElement('img');
  memeImage.id = 'meme-image';
  memeImage.className = 'meme-image';

  container.appendChild(memeImage);
}

function generateMemeTemplateOne(container, memeImage) {
  const templateOne = document.createElement('img');
  templateOne.id = 'meme-1';
  templateOne.src = 'imgs/meme1.png';
  templateOne.className = 'meme-template';

  container.appendChild(templateOne);
  templateOne.addEventListener('click', function () {
    memeImage.src = templateOne.src;
  });
}

function generateMemeTemplateTwo(container, memeImage) {
  const templateTwo = document.createElement('img');
  templateTwo.id = 'meme-2';
  templateTwo.src = 'imgs/meme2.png';
  templateTwo.className = 'meme-template';

  container.appendChild(templateTwo);
  templateTwo.addEventListener('click', function () {
    memeImage.src = templateTwo.src;
  });
}

function generateMemeTemplateThree(container, memeImage) {
  const templateThree = document.createElement('img');
  templateThree.id = 'meme-3';
  templateThree.src = 'imgs/meme3.png';
  templateThree.className = 'meme-template';

  container.appendChild(templateThree);
  templateThree.addEventListener('click', function () {
    memeImage.src = templateThree.src;
  });
}


function generateMemeTemplateFour(container, memeImage) {
  const templateFour = document.createElement('img');
  templateFour.id = 'meme-4';
  templateFour.src = 'imgs/meme4.png';
  templateFour.className = 'meme-template';

  container.appendChild(templateFour);
  templateFour.addEventListener('click', function () {
    memeImage.src = templateFour.src;
  });
}

function generateMemeTemplates() {
  const container = document.getElementById('meme-template');
  const memeImage = document.getElementById('meme-image');
  generateMemeTemplateOne(container, memeImage);
  generateMemeTemplateTwo(container, memeImage);
  generateMemeTemplateThree(container, memeImage);
  generateMemeTemplateFour(container, memeImage);
}

window.onload = function () {
  generateTextInputBox();
  generateImageUploadButton();
  generateMemeText();
  generateMemeImage();
  generateBordersButtons();
  generateMemeTemplates();
};
