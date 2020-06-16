
const api = require('../helper/conexao.js');

module.exports = {
    async post(request,response){
        const { id }  = request.query;
        
        const { pontuacao, erros } = request.body;   

        const result = await api('jogo').insert({
            pontuacao,
            erros,
            "jogador_id": id
        });

        return response.json(result);
    },
    async index(request,response){
        const jogos = await api('jogo').select('*').join('jogador','jogador.id','=','jogo.jogador_id');

        return response.json(jogos);
    }
}