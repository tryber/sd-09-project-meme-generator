const output = document.getElementById('meme-image');

function addText() {
    let textInput = document.querySelector('#text-input');
    let textBox = document.querySelector('#meme-text');

    textInput.addEventListener('input', () => {
        textBox.innerHTML = textInput.value;
    })
}

addText();

var loadFile = function(event) {
    
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
  };


  function loadMeme() {
   let memeList = document.querySelectorAll('.memes');
   for (let i = 0; i < memeList.length; i++) {
     memeList[i].addEventListener('click', (event) => {
       output.src = `${event.target.src}`
       console.log(event.target.src)    
     })
   }
  }
  loadMeme();