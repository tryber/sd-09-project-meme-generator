function writesMemeText() {
  console.log('Teste')
  let textInput = document.querySelector('#text-input')
  let memeText = document.querySelector('#meme-text')

  memeText.textContent = textInput.value

  console.log(textInput.value)
}

function addListeners() {
  let textInput = document.querySelector('#text-input')
  textInput.addEventListener("keyup",writesMemeText)
}

addListeners()