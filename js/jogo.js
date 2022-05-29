var palavraSecreta = ["alura", "curso", "java", "internet", "conhecer", "carro", "moto"];
var letra = [];
var sorteia;
var chance = 0;
var tecla = 0;
console.log(palavraSecreta);

var comecar = document.querySelector(".bt-comecar");
var adicionar = document.querySelector(".bt-adicionar");
var digitar = document.querySelector(".palavra");
var salvar = document.querySelector(".bt-salvar");
var cancelar = document.querySelector(".bt-cancelar");
var novo = document.querySelector(".bt-novo");
var desistir = document.querySelector(".bt-desisti");

digitar.focus();

function existePalavra(){
    if(digitar.value !== ""){
        var toda = digitar.value.toUpperCase();
        palavraSecreta.push(toda);
        
        console.log(palavraSecreta);
        limpaPalavra();
    }            
}

/* Limpa o texto digitado e coloca o ponto de inserção para digitar novamente. */
function limpaPalavra(){
    digitar.value = "";
    digitar.focus();
}

/* Eventos de clicar nos botões. */
salvar.addEventListener("click", existePalavra);
cancelar.addEventListener("click", limpaPalavra);