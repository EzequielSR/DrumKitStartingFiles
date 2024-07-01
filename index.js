
// Botão clicado
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// criei uma variável que seleciona os objetos com a classe chamada drum, depois soletra os números dos elementos.[0],[1]...

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)

    })
    //tecla clicado
    document.addEventListener("keypress", function (event) {
        makeSound(event.key)
    })
}
function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play()
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        default:
            break;
        //Eu implementei uma função chamada switch que quando a classe dos botões forem acionadas ("w,a ou j") toca o som com o respectiva imagem de fundo.
    }
}
// var audio = new Audio("sounds/tom-1.mp3")
// audio.play();
//Nisso, criei um loop que inicia e termina com os números dos elementos. Nele há uma função que classifica os elementos através da classe e incrementa um evento com a função de click que depois acionada aparece na tela um alerta.