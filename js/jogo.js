var palavras = ["ALURA", "CURSO", "JAVA", "INTERNET", "CONHECER", 
    "CARRO", "MOTO", "TEXTO", "LIVRO", "CARNE"
];
var letras = [];
var palavraCorreta = "";
var erros = 10;

var desistir = document.querySelector(".bt-desisti");

desistir.addEventListener("click", () => {
    window.open("index.html", "_self");
});

// Para gerar uma palavra nova (que estja no /array), toda vez que o jogo for iniciado.
function sorteiaPalavraSecreta(){
   var palavra = palavras[Math.floor(Math.random() * palavras.length)];
   palavraSecreta = palavra;
   console.log(palavras);     
   console.log(palavra);
   return palavra;
}

/* Função responsável por todo funcionamento dentro do canvas (desenhos: forca e boneco, tracinhos, 
    letras corretas e erradas, frases do vencedor e perdedor) existentes no jogo. */  
desenharTracinhos(sorteiaPalavraSecreta());

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key);             
        return false;       
    }else{
        letras.push(key.toUpperCase());              
        return true;   
    }
}

function adicionarLetraCorreta(i){
    palavraCorreta += palavraSecreta[i].toUpperCase();        
}

function adicionarLetraIncorreta(letter){
    if(palavraSecreta.indexOf(letter) <= 0){        
        erros -= 1;                           
    }
}

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adicionarLetraCorreta(palavraSecreta.indexOf(letra));
            for(let i = 0; i < palavraSecreta.length; i++){
                if(palavraSecreta[i] === letra){
                    letraCorreta(i);                                                                       
                }
            }
        }else{
            if(!verificarLetraCorreta(e.key))
                return
                adicionarLetraIncorreta(letra);
                letraErrada(letra, erros);
                perderJogo();                
        }   
    }
};     
    
function perderJogo(){      
    if(erros == 9){
        desenharBaseForca();
    }
    if(erros == 8){
        desenharTetoForca();                       
    }
    if(erros == 7){
        desenharCorda();
    }
    if(erros == 6){
        desenharCabeca();
    }
    if(erros == 5){
        desenharCorpo();
    }
    if(erros == 4){
        bracoEsquerdo();
    }
    if(erros == 3){
        bracoDireito();
    }
    if(erros == 2){
        pernaEsquerda();
    }
    if(erros == 1){
        pernaDireita();  
        jogadorPerde();
        desabilitarTeclado();
    }
} 

function desabilitarTeclado(){
    document.onkeydown = letraCorreta;  
}

// Estou quase resolvendo - 05/05/2022//.
/*function vencerJogo(){
    //if(palavraSecreta != letraErrada.length && letras.length != ""){
    //if(palavraCorreta === letraCorreta.length){
    //if(letraCorreta.length == true && letraCorreta.length === palavraCorreta.length){
    
    if(palavraSecreta.length === letras.length){
        jogadorVence();
        desabilitarTeclado();
    }
}  */

// Função para adicionar novas palavras ao jogo - não funciona.
/*function adicionarPalavra(){
    if(!digitar == ""){
        var toda = digitar.value.toUpperCase();
        palavras.push(toda);        
        //console.log(palavraSecreta);
        //console.log(adicionarPalavra());        
        limpaPalavra();
    }else {
        limpaPalavra();
        alert("Digite uma palavra válida");       
    }   
}*/   

// Limpa o texto digitado e coloca o ponto de inserção para digitar novamente. 
/*function limpaPalavra(){
    digitar.value = "";
    digitar.focus();
}  */
