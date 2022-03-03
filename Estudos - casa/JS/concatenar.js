// Vou inserir no html usando o document.write
document.write("<h1>Este elemento está sendo inserido pelo JS</h1>");
document.write("<p>Este é um paragrafo inserido pelo JS</p>");

var nome = prompt("Digite o seu nome: ");
var idade = prompt("Digite a sua idade: ");

// O método prompt abre um dialog para inserir valores
// Os valores recebidos no prompt sempre serão recebidos como string

document.write("Olá, " + nome + ". Prazer em conhecer você. Sua idade é " + idade);