

window.onload = () => {


const btnReiniciar = $('#reiniciar');


var controle = new ControleController();
var dados = new dadosController();

dados.buscarTextos();

document.getElementById("enviar").onclick = function (event) {
    event.preventDefault();
    let jogador = new Jogador();
};

document.getElementById("textoAluno").oninput = (input) => {
    const letra = input.data;
    const textoAluno = $("#textoAluno").val();
    controle.setLetraAtual(letra);
    const textoQtd = textoAluno.length;
    controle.comparartexto(textoQtd);        
};

document.querySelector("#textoAluno").onfocus = () => {
    controle.temporizador();
    controle.apagarTexto();
}

btnReiniciar.click((event) => {
    event.preventDefault();
    controle.reiniciar();
})

$('#trocar').click((event) => {
    event.preventDefault();
    dados.buscarTextos();
    controle.reiniciar();
});

$('#enviar').click((event) => {
    event.preventDefault();
});

}