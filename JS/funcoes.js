// Função do tipo VOID
// function calcularAreaTerreno(largura, comprimento){

//     var area = largura * comprimento;

//     document.write(area);
// }

// calcularAreaTerreno(15, 25);

// // Função do tipo RETURN
// function calcularAreaTerreno(largura, comprimento){

//     var area = largura * comprimento;

//     return area;
// }

// document.write(calcularAreaTerreno(15, 25));

// ---------------------------------------------------------- * ----------------------------------------------------------

// 3 escopos: Global, Função e Bloco

// var serie = "friends"; //variável no escopo GLOBAL


// // Escopo de bloco
// if(true){
//     var serie2 = "game of thrones"; //sofre hoisting para o escopo ao qual está inserida
//     document.write(serie);
// }

// document.write(serie2);

// document.write('<hr/>');

// function x(){

//     var serie3 = "HIMYM"; // não sofre hoisting
//     document.write(serie);
//     document.write(serie2);
// }

// document.write(serie3);

// ---------------------------------------------------------- * ----------------------------------------------------------

// Funções anônimas
// var exibirSaudacao = function (nome) {
//     document.write("Olá " + nome);
// }

// exibirSaudacao('Jorge');

// ---------------------------------------------------------- * ----------------------------------------------------------

// Funções de CallBack

function exibirArtigo (ID, callbackSucesso, callbackErro){

    if(true){
        callbackSucesso('Funções de callback em JS', 'Funções de callback...');
    }else{
        callbackErro('Erro ao recuperar os dados');
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>');
    document.write("<hr/>")
    document.write('<p>' + descricao + '</p>');
}

var callbackErro = function(erro){
    document.write('<p>' + erro + '</p>');

}

exibirArtigo(1, callbackSucesso, callbackErro);