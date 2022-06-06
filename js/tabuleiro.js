var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

// Partes de forca e a corda.
function desenharCorda() {
    pincel.fillStyle= "#FF8C00";
    pincel.fillRect(328, 0, 4.5, 48);   
    //pincel.fill();
}

function desenharTetoForca() {
    pincel.fillStyle= "#C71585";     
    pincel.fillRect(152, 0, 190, 4.5);  
    pincel.fill();
}

function desenharBaseForca() {
    pincel.fillStyle= "#C71585";        
    pincel.fillRect(150, 0, 4.5, 460);    
    pincel.fill();
}

function desenharChao() {
    pincel.fillStyle= "#008000";       
    pincel.fillRect(0, 460, 464, 5);
    pincel.fill();
}

// Desenhando um circulo para a cabeça do no boneco da forca. 
function desenharCabeca(){
    pincel.fillStyle= "#0A3871";     
    pincel.beginPath();
    pincel.arc(330, 90, 41.5, 0, 4 * Math.PI, true);  // Borda externa do circulo. 
    pincel.arc(330, 90, 37, 0, 4 * Math.PI, true); // Borda interna do circulo.
    pincel.fill('evenodd'); // Para retirar a cor de fundo do circulo.    
}

// Desenhar uma linha para o braço esquerdo.
function bracoEsquerdo(){    
    pincel.fillRect(300, 150, 30, 4.5); // Ombro.
    pincel.fillRect(300, 150, 4.5, 80); // Braço.    
}

// Desenhar duas linhas para o braço direito. 
function bracoDireito(){     
    pincel.fillRect(332, 150, 30, 4.5); // Ombro.
    pincel.fillRect(362, 150, 4.5, 80); // Braço.       
}

// Desenhar duas linhas para ser o corpo do boneco.
function desenharCorpo() {    
    pincel.fillRect(330, 128, 4.5, 150);      
}

// Desenhar duas linhas para a perna esquerda.
function pernaEsquerda(){    
    pincel.fillRect(300, 273, 30, 4.5); // Cintura.
    pincel.fillRect(300, 273, 4.5, 120); // Perna.    	
}

// Desenhar duas linhas para a perna direita. 
function pernaDireita(){     
    pincel.fillRect(332, 273, 30, 4.5); // Cintura.
    pincel.fillRect(362, 273, 4.5, 120); // Perna.        
}

function apagarBoneco(){
    desenharCabeca.visibility = false;
}

// Vem do arquivo jogo.js.
// Esta funcionando, falta apenas arrumar os espaços entre os traços e posicionar.
function desenharTracinhos(){
    pincel.lineWidth = 4.5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.ltrokeStyle = "#0A3871";
    pincel.beginPath();
    var eixo = 400 / palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++){
        pincel.moveTo(40 + (eixo * i), 600);
        pincel.lineTo(80 + (eixo * i), 600);
    } 
    pincel.stroke();
    pincel.closePath();
}

function letraCorreta(index){
    pincel.font = "bold 40px Inter";
    pincel.lineWidth = 4.5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#7B68EE";
    var eixo = 400 / palavraSecreta.length;
    pincel.fillText(palavraSecreta[index], 45 + (eixo * index), 590);    
    pincel.fill();
}

function letraErrada(letra, errorsLeft){
    pincel.font = "bold 40px Inter";
    pincel.lineWidth = 4.5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#B22222";
    pincel.fillText(letra, 40 + (40 * (8 - errorsLeft)), 670, 40);
    pincel.fill();
}

function jogadorVence(){
    pincel.font = "bold 30px Inter";
    pincel.fillText("Você Venceu", 240, 440);
    pincel.fillStyle = "#006400";
    pincel.fill();
}

function jogadorPerde(){
    pincel.font = "bold 30px Inter";
    pincel.fillText("Você Perdeu", 240, 440);   
    pincel.fillStyle = "#8B0000";
    pincel.fill();
}

desenharChao();
