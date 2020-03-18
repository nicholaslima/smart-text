class ControleController {
    constructor() {
        this._acertos = 0;
        this._erros = 0;
        this._tempo = 10;
        this._textoAluno;
        this._textoTeste;
        this._tamanhoDigitado = 0;
        this._letraAtual;
        this._posicoesErros = [];
        this._inputsTeste;
        this._inputsAluno;

        this._acertosElemento;
        this._errosElemento;
        this._tempoElemento;
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

    setLetraAtual(letra){
        this._letraAtual = letra;
    }

    comparartexto(valido) {
        if(valido !== false){
            if(this._textoAluno[this._tamanhoDigitado - 1] === this._textoTeste[this._tamanhoDigitado - 1]) {
                this._acertos++;
            }
            else {
                this._erros++;
                this.capturarErros(this._tamanhoDigitado -1);
                console.log(this._posicoesErros);
            }  
            this.setPontuacao();
        }
    }

    dividirTextoTeste(){
        this._inputsTeste = this._textoTeste.split();
    }

    dividirTextoAluno(){
        this._inputsAluno = this._textoAluno.split();
    }

    capturarErros(posicao){
        this._posicoesErros.push(posicao);
    }

    setTamanho(tamanho){
        if(tamanho !== false){
            this._tamanhoDigitado = tamanho;
            return this._tamanhoDigitado;
        }else{
            return false;
        }
    }

    filtroCorrecaoUsuario(textoQtd){
        if(textoQtd < this._tamanhoDigitado){
            if(this.encontrarErros(textoQtd)){
                console.log(this._posicoesErros.splice(textoQtd));
                this._erros--;
                this.setPontuacao();
            }else{
                this._acertos--;
                this.setPontuacao();
            }
            console.log(this._tamanhoDigitado);
            console.log(textoQtd);
            console.log(this.encontrarErros(textoQtd));
            console.log(this._posicoesErros);
            console.log(this._posicoesErros);
            console.log(this._posicoesErros);
            this.dividirTextoTeste();
            this.dividirTextoAluno();
            console.log(this._inputsTeste);
            console.log(this._inputsAluno);
            return false;
        }else{
            return textoQtd;
        }
    }

    encontrarErros(textoQtd){
        return this._posicoesErros.includes(textoQtd);
    }

    setPontuacao(){
        this._acertosElemento.text(this._acertos);
        this._errosElemento.text(this._erros);
    }
}
