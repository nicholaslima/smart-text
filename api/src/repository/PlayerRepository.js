
const banco = require('../helper/conection');
const AppError = require('../errors/AppErrors');

class PlayerRepository{

    async findPlayer(id){
        const player = await banco('jogador').where('id',id).select('*').first();

        if(!player){
            throw new AppError('este jogador não existe',400);
        }

        return player;
    }

    async playerExist(email){
        const player = await banco('jogador').select('*').where({email});

        const [playerExists] = player;

        if(playerExists){
            throw new AppError('esse usuario ja existe',400);
        }
    }
    async createPlayer({ email,passwordHash,nome,idade,sexo }){
       await banco('jogador').insert({ email, senha: passwordHash ,nome,idade,sexo });
    }
}

module.exports = PlayerRepository;