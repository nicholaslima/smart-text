class ControleController {
    constructor() {
        this._tempo = 10;
        this._textoAluno;
        this._textoTeste;
        this._letraAtual;
        this._posicoesErros = [];
        this._posicoesAcertos = [];

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


    comparartexto(textoQtd){
        if(!this.verificaErro(textoQtd)){
            if(this._letraAtual == this._textoTeste[textoQtd - 1]) {
                this.capturarAcertos(textoQtd -1);
                console.log(this._posicoesAcertos);
            }
            else {
                this.capturarErros(textoQtd -1);
                console.log(this._posicoesErros);
            }     
            this.setPontuacao();
        }
    }

    verificaErro(textoQtd){
        if(this.encontrarErros(textoQtd)){
            this._posicoesErros.pop();
            console.log(this._posicoesErros);
            this.setPontuacao();
            return true;
        }else if(this.encontrarAcertos(textoQtd)){
            this._posicoesAcertos.pop();
            console.log(this._posicoesAcertos);
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
