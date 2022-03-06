document.getElementById("button-enviar").onclick = function() {valida()};

function valida(){

    var nome = document.getElementById("nome").value;
    // document.getElementById("nome").setAttribute("disabled", "disable");
    console.log(nome);

    var altura = document.getElementById("altura").value;
    altura = parseFloat(altura);
    altura = altura / 100;
    // document.getElementById("altura").setAttribute("disabled", "disable");
    console.log(altura);

    var peso = document.getElementById("peso").value;
    peso = parseFloat(peso);
    // document.getElementById("peso").setAttribute("disabled", "disable");
    console.log(peso);

    if(altura != parseFloat(altura) || peso != parseFloat(peso)){
        alert("Valor digitado está inválido");
    }else{
        calculaIMC();
    }
}

function calculaIMC() {

    var IMC = peso / altura ** 2;
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
        document.getElementById("resultado").value = "Obresidade Grau 3";
    }

}
