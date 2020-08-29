
const conection = require('../helper/conection');
const GameRepository = require('../repository/GameRepository');
const PlayerRespository = require('../repository/PlayerRepository');

const Game = new GameRepository();
const Player = new PlayerRespository();

module.exports = {
    
    async post(request,response){

        const { id }  = request.query;
        
        const { pontuacao, erros } = request.body;   

        const result = await conection('jogo').insert({
            pontuacao,
            erros,
            "jogador_id": id
        });

        return response.json(result);
    },

    async index(request,response,next){
        const games = await conection('jogo').select('*').join('jogador','jogador.id','=','jogo.jogador_id');
        
        return response.json(games);
    },

    async gamesPlayer(request,response,next){
        const { id }  = request.query;

        await Player.findPlayerById(id);

        const games = await Game.findByPlayer(id);

        return response.json(games);
    }
}