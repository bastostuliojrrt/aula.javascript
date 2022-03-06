var parametro = prompt("Digite um número: ");
parametro = parseInt(parametro);

switch(parametro){
    case 1:
        document.write("Parametro 1");
        break;
    
    case 2:
        document.write("Parametro 2");
        break;

    case 3:
        document.write("Parametro 3");
        break;
    
    default:
        document.write("Nenhum dos parâmetros");
        break;
}