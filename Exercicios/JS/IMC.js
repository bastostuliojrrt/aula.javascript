document.getElementById("button-enviar").onclick = function() {valida()};

let nomeElement = document.getElementById("nome");
let nome;
let alturaElement = document.getElementById("altura");
let altura;
let pesoElement = document.getElementById("peso");
let peso;
let IMC;

function valida(){

    nome = nomeElement.value;
    console.log(nome);

    altura = alturaElement.value;
    altura = parseFloat(altura);
    altura = altura / 100;
    console.log(altura);

    peso = pesoElement.value;
    peso = parseFloat(peso);
    console.log(peso);

    alturaElement.classList.remove("input-erro");
    pesoElement.classList.remove("input-erro");

    if(isNaN(altura) || Math.sign(altura) == -1|| isNaN(peso) || Math.sign(peso) == -1){
        alert("Valor digitado está inválido");
        if (isNaN(altura) && isNaN(peso) || Math.sign(altura) == -1 && Math.sign(peso) == -1){
            alturaElement.classList.add("input-erro");
            pesoElement.classList.add("input-erro");
        }else if(isNaN(altura) || Math.sign(altura) == -1){
            alturaElement.classList.add("input-erro");
        }else if(isNaN(peso) || Math.sign(peso) == -1){
            pesoElement.classList.add("input-erro");
        }
    }else{
        calculaIMC();
    }
}

function calculaIMC() {

    IMC = peso / altura ** 2;
    IMC = IMC.toFixed(2);
    console.log(IMC);
    document.getElementById("imc").value = IMC;

    if(IMC < 16){
        document.getElementById("resultado").value = "Muito abaixo do peso";
    }else if(IMC > 16 && IMC < 16.99){
        document.getElementById("resultado").value = "Abaixo do peso";
    }else if(IMC > 17 && IMC < 18.49){
        document.getElementById("resultado").value = "Um pouco abaixo do peso";
    }else if(IMC > 18.50 && IMC < 24.99){
        document.getElementById("resultado").value = "Pesoa ideal";
    }else if(IMC > 25 && IMC < 29.99){
        document.getElementById("resultado").value = "Um pouco acima do peso";
    }else if(IMC > 30 && IMC < 34.99){
        document.getElementById("resultado").value = "Obesidade Grau 1";
    }else if(IMC > 35 && IMC < 39.99){
        document.getElementById("resultado").value = "Obesidade Grau 2";
    }else if(IMC > 40){
        document.getElementById("resultado").value = "Obesidade Grau 3";
    }

}
