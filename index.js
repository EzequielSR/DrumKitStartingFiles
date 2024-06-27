

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// criei uma variável que seleciona os objetos com a classe chamada drum, depois soletra os números dos elementos.[0],[1]...

for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        this.style.color="white"
    })
}

// var audio = new Audio("sounds/tom-1.mp3")
// audio.play();
//Nisso, criei um loop que inicia e termina com os números dos elementos. Nele há uma função que classifica os elementos através da classe e incrementa um evento com a função de click que depois acionada aparece na tela um alerta.