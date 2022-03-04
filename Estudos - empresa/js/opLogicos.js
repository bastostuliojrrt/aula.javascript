// TRUE && TRUE = TRUE
// if( 2 == 2 && 3 >= 1){
//     document.write("Verdadeiro");
// }

// document.write("<hr/>");

// // TRUE && TRUE && FALSE = FALSE
// if( 2 == 2 && 3 >= 1 && 'A' == 'B'){
//     document.write("Verdadeiro");
// }else{
//     document.write("Falso");
// }

// document.write("<hr/>");

// TRUE || FALSE = TRUE
// if( 2 == 2 || 3 >= 1 && 'A' == 'B'){
//     document.write("Verdadeiro");
// }else{
//     document.write("Falso");
// }

// document.write("<hr/>");

// FALSE = TRUE/ TRUE = FALSE
// if( 2 !== 2){
//     document.write("Verdadeiro ");
// }else{
//     document.write("Falso ");
// }

// if( 3 !== 2){
//     document.write("Verdadeiro");
// }else{
//     document.write("Falso");
// }

// EXEMPLO DE NOTAS
var nota1 = prompt("Digite sua primeira nota: ");
nota1 = parseInt(nota1);
var nota2 = prompt("Digite sua segunda nota: ");
nota2 = parseInt(nota2);
var nota3 = prompt("Digite sua terceira nota: ");
nota3 = parseInt(nota3);

media = (nota1 + nota2 + nota3) / 3;


var faltas = prompt("Digite o seu número de faltas: ");
faltas = parseInt(faltas);

if(media >= 7 && faltas < 10){
    document.write("Sua média foi: " + media + " seu número de faltas foi " + faltas);
    document.write("<hr/>");
    document.write("Parabéns. Você foi aprovado.");
}else{
    document.write("Sua média foi: " + media + " seu número de faltas foi " + faltas);
    document.write("<hr/>");
    document.write("Sinto muito. Você foi reprovado.");
}