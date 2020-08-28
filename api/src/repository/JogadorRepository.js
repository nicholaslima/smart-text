
const api = require('../helper/conexao');
const AppError = require('../errors/AppErrors');

class JogadorRepository{

    async findJogador(id){
        const jogador = await api('jogador').where('id',id).select('*').first();

        if(!jogador){
            throw new AppError('este jogador não existe',400);
        }

        return jogador;
    }
}

module.exports = JogadorRepository;