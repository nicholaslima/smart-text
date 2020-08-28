
const conection = require('../helper/conection');
const PlayerRepository = require('../repository/PlayerRepository');
const AppErrors = require('../errors/AppErrors.js');

const Player = new PlayerRepository();

module.exports = {
    async index(request,response){
        const players = await conection('jogador').select('*');
        const [ playersExists ] = players;

        if(!playersExists){
            throw new AppErrors('jogadores não existem',400);
        }

        return response.json(players);
    },
    async find(request,response){
       const { id } =  request.params;
        
       const player = await Player.findPlayer(id);

       return response.json(player);

    }
    
}