
var turn = "player 1"




var jogadas = [0,1,2,3,4,5,6,7,8];


const table = document.querySelectorAll("button[id*='square']")
        console.log(table)

/*function start(){
    alert("Seja muito bem vindo ao TicTacToe\n\n\nver. 1.0")
   // console.log(nodeList)
    
    do {
        var choosePlayer = prompt("Digite: \n\n1- Para começar a  jogar com o X\n\n2- Para começar a jogar com a O")
    }while (choosePlayer != "1" && choosePlayer != "2")
    if (choosePlayer == "1"){
        turn = "player 1"
    }else if (choosePlayer == "2"){
        turn = "player 2"
    }
    console.log(turn)
}
start()*/
function remover(item){
    for( var i = 0; i < jogadas.length; i++){ 
    
        if ( jogadas[i] === item) { 
    
            jogadas.splice(i, 1); 
        }
    
    }
}


function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}
function player1(button){
    
    
        var botao = button.value
        
        
        button.innerText = "X"
        console.log(botao)
        var result = arrayRemove(jogadas,botao)
         console.log(result)
    
        jogadas = result
        
        console.log(jogadas)
        turn="player 2"
        
        
        

        if(table[0].textContent == "X"&&
        table[1].textContent==="X"&&
        table[2].textContent=="X" || 
        table[3].textContent == "X"&&
        table[4].textContent==="X"&&
        table[5].textContent=="X" ||
        table[6].textContent == "X"&&
        table[7].textContent==="X"&&
        table[8].textContent=="X" ||
        table[0].textContent == "X"&&
        table[4].textContent==="X"&&
        table[8].textContent=="X" ||
        table[6].textContent == "X"&&
        table[4].textContent==="X"&&
        table[2].textContent=="X"||
        table[7].textContent == "X"&&
        table[4].textContent==="X"&&
        table[1].textContent=="X"||
        table[0].textContent == "X"&&
        table[3].textContent==="X"&&
        table[6].textContent=="X"||
        table[2].textContent == "X"&&
        table[5].textContent==="X"&&
        table[8].textContent=="X"){
            alert("O jogador X GANHOU!!!\n\nAperte OK para jogar novamente")
            window.location.reload()
        }
        if (jogadas.length === 0){
            alert("Empate!!\n\nConfirme para jogar novamente!!")
            reset()
        }

        player2()
       
    

    
        
    
}
function reset(){
    window.location.reload()
}

function player2(){
    var jogadasP = random_item()
    console.log(jogadasP)
    
    table[jogadasP].innerText = "O"
    
    remover(jogadasP)
    
    /*for( var i = 0; i < jogadas.length; i++){ 
    
        if ( jogadas[i] === jogadasP) { 
    
            jogadas.splice(i, 1); 
        }
    
    }*/
    
    
    
    console.log(jogadas)
    
    if(table[0].textContent == "O"&&
    table[1].textContent==="O"&&
    table[2].textContent=="O" || 
    table[3].textContent == "O"&&
    table[4].textContent==="O"&&
    table[5].textContent=="O" ||
    table[6].textContent == "O"&&
    table[7].textContent==="O"&&
    table[8].textContent=="O" ||
    table[0].textContent == "O"&&
    table[4].textContent==="O"&&
    table[8].textContent=="O" ||
    table[6].textContent == "O"&&
    table[4].textContent==="O"&&
    table[2].textContent=="O"||
    table[7].textContent == "O"&&
    table[4].textContent==="O"&&
    table[1].textContent=="O"||
    table[0].textContent == "O"&&
    table[3].textContent==="O"&&
    table[6].textContent=="O" ||
    table[2].textContent == "O"&&
    table[5].textContent==="O"&&
    table[8].textContent=="O"){
        alert("O jogador O GANHOU!!!\n\nAperte OK para jogar novamente")
        window.location.reload()
    }
    if (jogadas.length === 0){
        alert("Empate!!\n\nConfirme para jogar novamente!!")
        reset()
    }
        
        
    }
    function random_item(){
        
        return jogadas[Math.floor(Math.random()*jogadas.length)];
             
        }