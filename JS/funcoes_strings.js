
var nome = ' Túlio Albuquerque Bastos ';

document.write(nome.length); //retorna o tamanho da 

document.write("<hr/>")

document.write(nome.charAt(4)); // retorna o elemento da posição informada

document.write("<hr/>")

document.write(nome.indexOf('e')); // retorna a posição do elemento informado

document.write("<hr/>")

document.write(nome.replace('Túlio Albu', 'Dale ')) // subistitui o 1º argumento pelo 2º

document.write("<hr/>")

document.write(nome.substr(6, 5)) // vai pegar a partir do elemento 6 até 5 elementos a frente

document.write("<hr/>")

document.write('-' + nome.trim() + '-'); //remove os espaços em branco nas estremidades
