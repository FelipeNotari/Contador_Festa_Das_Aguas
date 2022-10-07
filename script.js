let vidas = prompt("Digite o número de vidas");
let contador = document.querySelector(".contador").value;
let slider = document.querySelector("#slider");

/*Variáveis*/
let valorFinal = vidas;
let i = 0;
let intervaloMinimo = 0;
let intervalo = 800;
let tempoMaximo = 25000;

/*Intervalo minimo calculado*/
intervaloMinimo = (tempoMaximo / valorFinal);

/*Soma 1 ao contador*/
function soma() {
    contador++;
    document.querySelector(".contador").value = contador;
}

/*Soma 1 ao indice e chama*/
function soma_adiciona() {
    if (i < valorFinal) {
        soma();
        i++;
    }
    setTimeout(start, 1);
}

/*Inicia a contagem*/
function start() {
    /*Aumenta a velocidade*/
    if (i <= valorFinal * 0.10 && intervalo > intervaloMinimo) {
        intervalo = intervalo - 50;
    } else /*Diminui a velocidade*/
        if (i >= (valorFinal - 20) && intervalo < 800) {
            intervalo = intervalo + 50;
        }
    setTimeout(soma_adiciona, intervalo);
}

/*Barra de espaço para somar 1: Chama soma*/
document.addEventListener("keydown", function (event) {
    if (event.key === " " && i >= (valorFinal - 1)) {
        soma();
    }
});
/*Enter para começar a contagem: Chama start*/
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        start();
    }
});

let vid = document.querySelector(".bg_video");

function playVid() {
    vid.play();
}

window.onload = playVid();