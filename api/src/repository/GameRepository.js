const api = require('../helper/conection.js');
const AppError = require('../errors/AppErrors');

class GameRepository {


    async findByPlayer(id){
        
        const games  = await api('jogo')
                        .where('jogador_id',id)
                        .select('*');

        const [gamesExists] = games;

        if(!gamesExists){
           throw new AppError('este jogador não tem jogos',400);
        }

        return games;
    }
}

module.exports = GameRepository;