
const api = require('../helper/conexao.js');

module.exports = {
    async post(request,response){
        const jogador = request.body;

        const cadastrado = await api('jogador').insert(jogador);

        return response.json(cadastrado);
    },
    async index(request,response){
        const jogadores = await api('jogador').select('*');

        return response.json(jogadores);
    },
    async jogos(request,response){
        const { id }  = request.query;

        const jogos = await api('jogo')
                        .where('jogador_id',id)
                        .select('*');
                        

        console.log(jogos);
        console.log(id);
        return response.json(jogos);
    }
}