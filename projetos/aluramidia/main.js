function tocarSom(idAudio) {
  document.querySelector(idAudio).play();
  console.log("Som tocando");
}

const listaTeclas = document.querySelectorAll('.tecla'); // retorna array com lista de teclas



for(let i = 0; i < listaTeclas.length; i++){

  const tecla = listaTeclas[i]; // armazenando o array de teclas na constante tecla
  
  const instrumento = tecla.classList[1]; // pegando a segunda classe dos elementos dentro do array listaTeclas
  
  const idAudio = `#som_${instrumento}`; //parte fixa(#som) é concatenada com as variações de instrumento  

  // pega a posição do array de teclas e aplica o evento onclick em seguida chama a função tocarSom passando como parâmero o idAudio
  tecla.onclick = function(){
    tocarSom(idAudio);
  }

}