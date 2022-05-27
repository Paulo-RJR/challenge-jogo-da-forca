var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var tela2 = document.querySelector(".letras");
var pincel2 = tela2.getContext("2d");

// Desenhar as linhas para montar a forca.
function desenhaForca() {
    pincel.fillStyle= "#0A3871";
    pincel.fillRect(258, 0, 4.5, 48);    
    pincel.fillRect(82, 0, 177.75, 4.5);    
    pincel.fillRect(80, 0, 4.5, 360);    
    pincel.fillRect(0, 355, 294, 5);
    pincel.fill();
}

// Desenhando um circulo para a cabeça do no boneco da forca. 
function desenhaCabeca(){
    pincel.fillStyle= "#0A3871";     
    pincel.beginPath();
    pincel.arc(260, 80, 31.5, 0, 4 * Math.PI, true);  // Borda do circulo. 
    pincel.arc(260, 80, 27, 0, 4 * Math.PI, true); // Para retirar a cor de fundo.
    pincel.fill('evenodd'); // Para retirar a cor de fundo do circulo.    
}

/* Desenhar uma linha para o braço esquerdo. */
function bracoEsquerdo(){    
    pincel.fillRect(240, 130, 20, 4.5); // Ombro.
    pincel.fillRect(240, 130, 4.5, 50); // Braço.    
}

/* Desenhar uma linha para o braço direito.*/ 
function bracoDireito(){     
    pincel.fillRect(260, 130, 20, 4.5); // Ombro.
    pincel.fillRect(280, 130, 4.5, 50); // Braço.    
}

// Desenhar uma linha para ser o corpo do boneco.
function desenhaCorpo() {    
    pincel.fillRect(259, 111, 4.5, 100);      
}

function pernaEsquerda(){    
    pincel.fillRect(240, 208, 20, 4.5); // Ombro.
    pincel.fillRect(240, 208, 4.5, 70); // Braço.    	
}

/* Desenhar uma linha para o braço direito.*/ 
function pernaDireita(){     
    pincel.fillRect(260, 208, 20, 4.5); // Ombro.
    pincel.fillRect(280, 208, 4.5, 70); // Braço.    
}

function indicaLetra(){
    pincel2.fillStyle = "#0A3871";
    pincel2.fillRect(20, 90, 80, 4);
    
}

desenhaForca();
desenhaCabeca();
bracoEsquerdo();
bracoDireito();
desenhaCorpo(); 
pernaEsquerda();
pernaDireita();
indicaLetra();
