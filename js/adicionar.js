var salvar = document.querySelector(".bt-salvar");
var incorreta = document.querySelector(".palavra-incorreta");
var cancelar = document.querySelector(".bt-cancelar");

// Para volta à tela inicial do jogo.
cancelar.addEventListener("click", () => {
    window.open("index.html", "_self");
});

// Para validar palavra digitada.
salvar.addEventListener("click", () => {
    var digitar = document.querySelector(".palavra").value;
    var correta = true;
    digitar = digitar.split("\n");
    
    for(var texto in digitar){
        if(digitar[texto].length < 3 || digitar[texto].length > 8){
            correta = false;
            var mensagem = "Favor, digitar palavra com até 8 letras!";
            incorreta.textContent = mensagem;            
            setTimeout(() => {
                incorreta.textContent = "";                    
            }, 6000);                
        }        
    }
    if(correta){
        window.onbeforeunload = function(){
            sessionStorage.setItem(digitar[0], digitar[1]);
        }
        window.open("jogo.html", "_self");
    }
});

// Serve para aceitar apaenas as latras do teclado
window.addEventListener("keypress", function(e) {    
    var keyCode = (e.keyCode ? e.keyCode : e.which);    
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();        
    }   
});
