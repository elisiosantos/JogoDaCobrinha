let canvas = document.getElementById("Snake") // esta pegando o canvas
let context = canvas.getContext("2d") // Aqui define que o plano é 2d
let box = 32 // e um tamanho que é muito usado e importante
let snake = [] // cria um array
snake[0] = { // Objeto que esta mostrado o tamanho de x e y
    x: 8 * box,
    y:  8 * box
}

let direction = "right"

let food = {
    x: Math.floor(Math.random()*15 + 1) * box,
    y:  Math.floor(Math.random() * 15 + 1) * box    
}

function criarCobrinha(){
    for(var i = 0; i <snake.length; i++){
        context.fillStyle= "green" // esta colocando o estilo na cobrinha
        context.fillRect(snake[i].x, snake[i].y,box, box)   // o tamanho da cobrinha
       var b= snake.length
    }
    var texto= document.getElementById('iasndfp')
    texto.innerHTML= b
}


    

   
    function drawFood(){
        
        context.fillStyle = "red"
        context.fillRect(food.x,food.y, box,box)
       
      
    }


function criarBG(){
    context.fillStyle="lightgreen" // Aqui é a cor do plano 2d, fillStyle trabalha com o estilo.
    context.fillRect(0, 0, 16 * box , 16 * box) // Desenha.

}

document.addEventListener('keydown', update)

function update(e){// quando o cliente aperta, as setas a cobrinha resetara para onde ele quer.
    if(e.keyCode == 37 && direction != "right") direction = "left"
    if(e.keyCode == 38 && direction != "down") direction = "up"
    if(e.keyCode == 39 && direction != "left") direction = "right"
    if(e.keyCode == 40 && direction != "up") direction = "down"
}


function iniciarJogo(){ 

    if(snake[0].x > 15 * box && direction == "right") snake[0].x =0
    if(snake[0].x < 0 *box && direction == "left") snake[0].x = 16 *box
    if(snake[0].y > 15 * box && direction == "down") snake[0].y =0
    if(snake[0].y < 0  && direction == "up") snake[0].y = 16 * box


    for(i =1; i < snake.length; i++){
        if(snake[0].x == snake[i].x  && snake[0].y == snake[i].y){
        clearInterval(jogo)
        mensagem()
        }
    }


    
    criarBG()
    criarCobrinha()
    drawFood()
    

  


    let snakeX=snake[0].x 
    let snakeY=snake[0].y

        if(direction == "right") snakeX += box // faz a cobrinha recriar uma nova peça quando o cliente aperta uma tecla
        if(direction == "left") snakeX -= box
        if(direction == "up") snakeY -= box
        if(direction == "down") snakeY += box

    function perde(){
        if(snakeX != food.x || snakeY != food.y){
            snake.pop() 
        }else{
            food.x =Math.floor(Math.random()*15 + 1) * box
            food.y =Math.floor(Math.random() * 15 + 1) * box
        }
    }
    perde()
    
    
        let newHead = {
            x: snakeX, 
            y: snakeY
        }

        snake.unshift(newHead) // recria uma nova peça
    }

    function mensagem() {
        var html = document.querySelector('html');

        var criaBase = document.createElement('div');
        criaBase.setAttribute('class', 'caixa');
        html.appendChild(criaBase);
        
        var msg = document.createElement('p');
        msg.textContent = 'Que pena, você perdeu, Aperte no botão iniciar jogo.';
        criaBase.appendChild(msg);
        
        var fechaCaixa = document.createElement('button');
        fechaCaixa.textContent = 'x';
        criaBase.appendChild(fechaCaixa);
        
        fechaCaixa.onclick = function() {
            criaBase.parentNode.removeChild(criaBase);
        }
       
    }

    

    
  

let jogo= setInterval(iniciarJogo, 100) // tempo para a cobrinha se movimentar
