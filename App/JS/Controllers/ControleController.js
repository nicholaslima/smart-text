class ControleController {
    constructor() {
        this._tempo;
        this._textoAluno;
        this._textoTeste;
        this._letraAtual;
        this._posicoesErros = [];
        this._posicoesAcertos = [];
        this._idtempo;

        this._acertosElemento;
        this._errosElemento;
        this._tempoElemento;
        this._textoAlunoElemento;
        this._formElemento;
        this._numTextosElemento;
    }

    getAcertos() {
        return this._acertos;
    }
    getErros() {
        return this._erros;
    }
    setTextoAluno(textoAluno) {
        this._textoAluno = textoAluno;
    }
    setTextoTeste(textoTeste) {
        this._textoTeste = textoTeste;
    }

    setAcertosElemento(acertosElemento){
        this._acertosElemento = acertosElemento;
    }

    setErrosElemento(errosElemento){
        this._errosElemento = errosElemento;
    }

    setTempoElemento(tempoElemento){
        this._tempoElemento = tempoElemento;
    }

    setTextoElemento(textoAlunoElemento){
        this._textoAlunoElemento = textoAlunoElemento;
    }

    setNumTextosElemento(numTextos){
        this._numTextosElemento = numTextos;
    }

    setFormElemento(form){
        this._formElemento = form;
    }

    setLetraAtual(letra){
        this._letraAtual = letra;
    }

   
    temporizador(){
       this.reiniciarTempo();
       this._idtempo = setInterval(() => {
            this._tempo--;
            this._tempoElemento.text(this._tempo);
            if(this._tempo <= 0){
                clearInterval(this._idtempo);
                this.bloquearJogo();
            }
        },1000);     
    }

    setTempo(tempo){
        this._tempo = tempo;
    }

    desbloquearJogo(){
        this._textoAlunoElemento.attr("disabled",false);
        console.log("desbloquear");
    }

    apagarTexto(){
        this._textoAlunoElemento.val('');
    }

    reiniciar(){
        this.apagarTexto();
        this.desbloquearJogo();
        clearInterval(this._idtempo);
        this.reiniciarTempo();
        this.zerarNotas();
    }
    zerarNotas(){
        this._acertosElemento.text(0);
        this._errosElemento.text(0);
        this._numTextosElemento.text(0);
    }

    zerarTemporizador(){
        this.setTempo(0);
        this._tempoElemento.text(0);
    }

    reiniciarTempo(){
        this.setTempo(30);
        this._tempoElemento.text(30);
    }

    bloquearJogo(){
        this._textoAlunoElemento.attr("disabled","disabled");
        this.apagarTexto();
    }

    comparartexto(textoQtd){
        if(!this.verificaErro(textoQtd)){
            if(this._letraAtual == this._textoTeste[textoQtd - 1]) {
                this.capturarAcertos(textoQtd -1);
            }
            else {
                this.capturarErros(textoQtd -1);
            }     
            this.setPontuacao();
        }
    }

    verificaErro(textoQtd){
        if(this.encontrarErros(textoQtd)){
            this._posicoesErros.pop();
            this.setPontuacao();
            return true;
        }else if(this.encontrarAcertos(textoQtd)){
            this._posicoesAcertos.pop();
            this.setPontuacao();
            return true;
        }
    }
    

    capturarErros(posicao){
        this._posicoesErros.push(posicao);
    }

    capturarAcertos(posicao){
        this._posicoesAcertos.push(posicao);
    }

    encontrarErros(textoQtd){
        return this._posicoesErros.includes(textoQtd);
    }

    encontrarAcertos(textoQtd){
        return this._posicoesAcertos.includes(textoQtd);
    }

    setPontuacao(){
        this._acertosElemento.text(this._posicoesAcertos.length);
        this._errosElemento.text(this._posicoesErros.length);
    }
}
