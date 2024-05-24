
//efeito de digitação
var texto = "Meu nome é Maria Eduarda :)";
var textoElemento = document.querySelector(".text-animation");
var atraso = 200;

var contadorLetras = 0

function escreverTexto(){

    if(contadorLetras < texto.length){
        textoElemento.textContent += texto.charAt(contadorLetras); //concatenacoes do texto por letra, passando o contador de palavras 
        contadorLetras++;
        setTimeout(escreverTexto, atraso);
    }
}
escreverTexto();
