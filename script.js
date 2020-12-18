let memeImageContainer = document.querySelector('#meme-image-container');
let memeText = document.querySelector('#meme-text');
let textInput = document.querySelector('#text-input');

textInput.addEventListener('keyup', function (){
    memeText.innerText = textInput.value;
})
