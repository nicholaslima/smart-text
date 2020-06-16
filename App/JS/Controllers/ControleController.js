class ControleController {
    constructor() {
        this._acertosElemento = document.querySelector('#acertos');
        this._errosElemento = document.querySelector('#erros');
        this._tempoElemento = document.querySelector('#tempo');
        this._textoAlunoElemento = document.querySelector('#textoAluno');
        this._formElemento = document.querySelector('#formulario');
        this._numTextosElemento = document.querySelector('#textos');
        this._textoTesteElemento = document.querySelector('#textoTeste');
        
        this._tempo;
        this._textoAluno;
        this._textoTeste;
        this._letraAtual;
        this._posicoesErros = [];
        this._posicoesAcertos = [];
        this._idtempo;
    }

    getAcertos() {
        return this._acertos;
    }
    getErros() {
        return this._erros;
    }

    inserirTempo(){
        this._tempo =  this._tempoElemento.textContent;
    }

    setTextAluno(){
        this.textoAluno = this._textoAlunoElemento.value;
    }

    setTextTeste(){
        this._textoTeste =  this._textoTesteElemento.textContent;
    }

    setLetraAtual(letra){
        this._letraAtual = letra;
    }

   
    temporizador(){
       this.reiniciarTempo();
       this._idtempo = setInterval(() => {
            this._tempo--;
            this._tempoElemento.textContent = this._tempo;
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
        this._textoAlunoElemento.removeAttribute("disabled");
    }

    apagarTexto(){
        this._textoAlunoElemento.value = '';
    }

    reiniciar(){
        this.apagarTexto();
        this.desbloquearJogo();
        this.reiniciarTempo();
        this.zerarNotas();
    }
    zerarNotas(){
        this._acertosElemento.textContent = 0;
        this._errosElemento.textContent = 0;
        this._numTextosElemento.textContent = 0;
    }

    zerarTemporizador(){
        this.setTempo(0);
        this._tempoElemento.textContent = 0;
    }

    reiniciarTempo(){
        clearInterval(this._idtempo);
        this.setTempo(30);
        this._tempoElemento.textContent = 30;
    }

    bloquearJogo(){
        this._textoAlunoElemento.setAttribute("disabled","disabled");
        this.apagarTexto();
    }

    comparartexto(textoQtd){
        this.setTextAluno();
        this.setTextTeste();
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
        this._acertosElemento.textContent = this._posicoesAcertos.length;
        this._errosElemento.textContent = this._posicoesErros.length;
    }
}
