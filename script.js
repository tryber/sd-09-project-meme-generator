 let message = document.getElementById("text-input");
 let botao = document.getElementById("meme-image");
 let texto = document.querySelector('.textMeme');
 botao.addEventListener('click', criarMeme);
 
 function criarMeme(event){
    texto.innerHTML = message.value.toUpperCase();    

 }

let button1 = document.querySelector('#fire');
let button2 = document.querySelector('#water');
let button3 = document.querySelector('#earth');
let image = document.querySelector(".container");
button1.addEventListener('click', adicionaBorda1);
button2.addEventListener('click', adicionaBorda2);
button3.addEventListener('click', adicionaBorda3);



function adicionaBorda1(){
   image.style.border = '3px dashed red'
}

function adicionaBorda2(){
   image.style.border = '5px double blue'
}

function adicionaBorda3(){
   image.style.border = '6px groove green'
}
/*
let foto1 = document.querySelector('#meme-1');
let foto2 = document.querySelector('#meme-2');
let foto3 = document.querySelector('#meme-3');
let foto4 = document.querySelector('#meme-4');
let image = document.querySelector("#meme-image" );
button1.addEventListener('click', fotos1);
button2.addEventListener('click', fotos2);
button3.addEventListener('click', fotos3);
button4.addEventListener('click', fotos4);


function fotos1(){
   image.src = foto1.src
}

function fotos2(){
   image.src = '5px double blue'
}

function fotos3(){
   image.src = '6px groove green'
}

function fotos4(){
   image.src = '6px groove green'
}*/