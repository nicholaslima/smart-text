
const textoTeste = $("#textoTeste").text();
const acertos = $("#acertos").text();
const erros = $("#erros").text();
const tempo = $("#tempo").text();

const acertosElemento = $("#acertos");
const errosElemento = $("#erros");
const tempoElemento = $("#tempo");
const textoAlunoElemento = $("#textoAluno");
const btnReiniciar = $("#reiniciar");
const formulario = $("#formulario");
const numTextos = $("#textos");

var controle = new ControleController();

controle.setTextoAluno(textoAluno);
controle.setTextoTeste(textoTeste);
controle.setAcertosElemento(acertosElemento);
controle.setErrosElemento(errosElemento);
controle.setTempoElemento(tempoElemento);
controle.setTextoElemento(textoAlunoElemento);
controle.setFormElemento(formulario);
controle.setNumTextosElemento(numTextos);

document.getElementById("enviar").onclick = function (event) {
    event.preventDefault();
    let jogador = new Jogador(texto, acertos, erros, tempo);
    console.log(jogador);
};

document.getElementById("textoAluno").oninput = (input) => {
    const letra = input.data;
    const textoAluno = $("#textoAluno").val();
    controle.setLetraAtual(letra);
    const textoQtd = textoAluno.length;
      /* controle.comparartexto(
                    controle.setTamanho(
                        controle.filtroCorrecaoUsuario(textoQtd))
                    );*/
    controle.comparartexto(textoQtd);        
};

document.querySelector("#textoAluno").onfocus = () => {
    controle.temporizador();
}

btnReiniciar.click((event) => {
    event.preventDefault();
    controle.reiniciar();
})