function inserirTextoMeme () {
  let textInput = document.querySelector ('#text-input');
  textInput.addEventListener('input', function () {
    let memeText = document.querySelector ('#meme-text');
    memeText.innerText = textInput.value;
  })
}

function inserirImagemMeme () {
  let memeInsert = document.querySelector ('#meme-insert');
  memeInsert.addEventListener('change', function () {
      let memeImage = document.querySelector ('#meme-image');
      memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  })
}

function escolherMemeExistente () {
  let memePreSelecionados = document.querySelector ('#memes-prontos');
  memePreSelecionados.addEventListener ('click', function (event) {
    let memeImage = document.querySelector('#meme-image');
    memeImage.src = event.target.src;
  })
}

function trocarBorda () {
  let borderTypes = document.querySelector ('#border-types');
  let memeContainer = document.querySelector ('#meme-image-container');
  borderTypes.addEventListener ('click', function (event) {
    if (event.target.id === 'fire') {
      memeContainer.style.border = '3px dashed red'
    }
    if (event.target.id === 'water') {
      memeContainer.style.border = '5px double blue';
    }
    if (event.target.id === 'earth') {
    memeContainer.style.border = '6px groove green';
    }
  })
}

inserirTextoMeme ();
inserirImagemMeme ();
escolherMemeExistente ();
trocarBorda ();