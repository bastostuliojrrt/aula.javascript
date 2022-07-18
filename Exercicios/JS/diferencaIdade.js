function pulaLinha(){
  document.write('<br>');
}

function mostra(idade1, idade2){
  var resultado = idade1 - idade2;
  document.write(`Nossa diferença de idade é: ${resultado}` );
  pulaLinha();
}

var idade1 = parseInt(prompt('Digite a primeira idade: '));
var idade2 = parseInt(prompt('Digite a segunda idade: '));
mostra(idade1, idade2);
