const api = require('../helper/conexao.js');
const jogadorRepository = require('../repository/JogadorRepository');
const AppError = require('../errors/AppErrors');

const repositoryJogador = new jogadorRepository();

class JogoRepository {


    async findByJogador(id){
        
        const jogos  = await api('jogo')
                        .where('jogador_id',id)
                        .select('*');

        const [existeJogos] = jogos;

        if(!existeJogos){
           throw new AppError('este jogador não tem jogos',400);
        }

        return jogos;
    }
}

module.exports = JogoRepository;