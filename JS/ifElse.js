var nota = prompt("Digite sua primeira nota: ");
nota = parseInt(nota);
console.log(nota);
var nota2 = prompt("Digita sua segunda nota: ");
nota2 = parseInt(nota2);
console.log(nota2);
var nota3 = prompt("Digite sua terceira nota: ");
nota3 = parseInt(nota2)
console.log(nota3);

var media = (nota + nota2 + nota3)/3;

console.log(media);

if(media >= 7){
    document.write("Aprovador. Sua média foi " + media);
}else if(media >= 8){
    document.write("Reprovado. Sua média foi " + media);
}else{
    document.write("Reprovado. Sua média foi " + media);
}