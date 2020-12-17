function showText(){
    let text = document.getElementById('text-input');
    text.addEventListener('input', function(){
        document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
    });
}

showText();

function previewImage() {
    let oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById('uploadImage').files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById('meme-image').src = oFREvent.target.result;
    };
}