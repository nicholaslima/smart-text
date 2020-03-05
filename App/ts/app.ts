
const texto = $("#texto").val();
const texto2 = $("#texto2").text();
const acertos = $("#acertos").text();
const erros = $("#erros").text();
const tempo = $("#tempo").text();



const acertosElemento = $("#acertos");
const errosElemento = $("#erros");
const tempoElemento = $("#tempo");

var controle = new ControleController();


document.getElementById("enviar").onclick =  function(event){
    event.preventDefault();

   let jogador = new Jogador(texto,acertos,erros,tempo);
   console.log(jogador);
};




document.getElementById("texto").oninput = () => {
    const texto = $("#texto").val();
    const texto2 = $("#texto2").text();

    controle.setTexto(texto);
    controle.setTexto2(texto2);
    
    controle.comparartexto();

    acertosElemento.text(controle.getAcertos());
    errosElemento.text(controle.getErros());
}; 