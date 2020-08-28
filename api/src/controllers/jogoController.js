
const api = require('../helper/conexao.js');
const JogoRepository = require('../repository/JogoRepository');
const JogadorRepository = require('../repository/JogadorRepository');
const AppError = require('../errors/AppErrors.js');
const jogosRepository = new JogoRepository();
const jogadorRepository = new JogadorRepository();

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
    async index(request,response,next){
        const jogos = await api('jogo').select('*').join('jogador','jogador.id','=','jogo.jogador_id');
        next();
        return response.json(jogos);
    },
    async jogosJogador(request,response,next){
        const { id }  = request.query;

        await jogadorRepository.findJogador(id);

        const jogos = await jogosRepository.findByJogador(id);

        return response.json(jogos);
    }
}