var idade = prompt("Qual a sua idade: ");
idade = parseInt(idade);
console.log(idade);

while(idade != parseInt(idade) || Math.sign(idade) == -1){
    alert("O valor digitado não é um número.")
    idade = prompt("Qual a sua idade: ");
    console.log(idade);
}

console.log(idade);

if (idade >= 0 && idade <15){
    document.write("Criança");
}else if(idade >= 15 && idade < 30){
    document.write("jovem");
}else if(idade >= 30 && idade < 60){
    document.write("Adulto");
}else if(idade >= 60){
    document.write("Idoso");
}