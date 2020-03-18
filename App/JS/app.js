
const textoTeste = $("#textoTeste").text();
const acertos = $("#acertos").text();
const erros = $("#erros").text();
const tempo = $("#tempo").text();

const acertosElemento = $("#acertos");
const errosElemento = $("#erros");
const tempoElemento = $("#tempo");

var controle = new ControleController();

document.getElementById("enviar").onclick = function (event) {
    event.preventDefault();
    let jogador = new Jogador(texto, acertos, erros, tempo);
    console.log(jogador);
};

document.getElementById("textoAluno").oninput = (input) => {
    const letra = input.data;
    const textoAluno = $("#textoAluno").val();

    controle.setTextoAluno(textoAluno);
    controle.setTextoTeste(textoTeste);
    controle.setAcertosElemento(acertosElemento);
    controle.setErrosElemento(errosElemento);
    controle.setTempoElemento(tempoElemento);
    controle.setLetraAtual(letra);
    const textoQtd = textoAluno.length;
      
       controle.comparartexto(
                    controle.setTamanho(
                        controle.filtroCorrecaoUsuario(textoQtd))
                    );
                 
};

