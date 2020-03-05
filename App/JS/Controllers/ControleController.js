class ControleController {
    constructor() {
        this._acertos = 0;
        this._erros = 0;
        this._tempo = 10;
    }
    comparartexto() {
        var qtd = this._texto.length;
        if (this._texto[qtd - 1] === this._texto2[qtd - 1]) {
            this._acertos++;
        }
        else {
            this._erros++;
        }
    }
    getAcertos() {
        return this._acertos;
    }
    getErros() {
        return this._erros;
    }
    setTexto(texto) {
        this._texto = texto;
    }
    setTexto2(texto2) {
        this._texto2 = texto2;
    }
}
