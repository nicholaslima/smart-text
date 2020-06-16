

class dadosController{
    constructor(){
        this.textoElemento = document.querySelector('#textoTeste');
        this.contagemTexto = document.querySelector('#textos');
        this.textos;
        this.textoAtual = 0;
        this.qtdTextos;
    }

    async buscarTextos(){
        const resposta = await banco.get('/');
        this.textos = await resposta.data;
        this.inserirTexto();
    }

    inserirTexto(){
        this.qtdTextos = this.textos.length;
        if(this.textoAtual < this.qtdTextos){
            this.textoElemento.textContent = this.textos[this.textoAtual].conteudo;
            this.textoAtual++;
            this.contagemTexto.textContent = this.textoAtual;
        }else{
            this.textoAtual = 0;
            this.textoElemento.textContent = this.textos[this.textoAtual].conteudo;
            this.textoAtual++;
            this.contagemTexto.textContent = this.textoAtual;
        }
    }

    async buscarJogadores(){
        const resposta = await banco.get('/jogador');
        this.jogadores = await resposta.data;
    }

    async enviarPontuacao(dados){
       const resposta =  await banco.post('texto',dados);
       console.log(resposta);
    }
}