
class Jogador{

    private _texto;
    private _acertos;
    private _erros;
    private _tempo;

    constructor(texto,acertos,erros,tempo){
        this._texto = texto;
        this._acertos = acertos;
        this._erros = erros;
        this._tempo = tempo;
    }

    get texto(){
        return this._texto;
    }

    get acertos(){
        return this._acertos;
    }

    get erros(){
        return this._erros;
    }

    get tempo(){
        return this._tempo;
    }
}
