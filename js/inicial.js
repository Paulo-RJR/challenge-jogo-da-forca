var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

/* Desenhar as linhas para montar a forca.
function desenhaForca() {
    pincel.fillStyle= "blue";
    pincel.fillRect(258, 0, 4.5, 48);    
    pincel.fillRect(82, 0, 177.75, 4.5);    
    pincel.fillRect(80, 0, 4.5, 360);    
    pincel.fillRect(0, 355, 294, 5);
}

/* Desenhando um circulo para a cabeça do no boneco da forca. 
function desenhaCabeca(){
    pincel.fillStyle = "darkred";
    pincel.beginPath();
    pincel.arc(260, 80, 31.5, 0, 2 * Math.PI);
    /*pincel.stroke();
    pincel.fill();
}

/* Desenhar uma linha para o brço esquerdo. 
function bracoEsquerdo(){
    pincel.fillStyle = "blue";
	pincel.beginPath();   
    pincel.lineTo(263, 105);
    pincel.lineTo(210, 200);
    pincel.stroke(); //draw path
    pincel.fill();
}

/* Desenhar uma linha para o brço direito. 
function bracoDireito(){
    pincel.fillStyle = "blue";
	pincel.beginPath();   
    pincel.lineTo(263, 111);
    pincel.lineTo(360, 294);
    pincel.stroke(); //draw path
    pincel.fill();
}

/* Desenhar uma linha para ser o corpo do boneco.
function desenhaCorpo() {
    pincel.fillStyle= "blue";
    pincel.fillRect(259, 111, 4.5, 130);
    /*pincel.strokeStyle='black';
    pincel.strokeRect(147, 110, 4.5, 160);
}

desenhaForca();
desenhaCabeca();
bracoEsquerdo();
bracoDireito();
desenhaCorpo(); */
