
const conection = require('../helper/conection');
const AppError = require('../errors/AppErrors');
const CreateUser = require('../service/CreateUserService');

module.exports = {
    async auth(request,response){
        const { email,senha } = request.body;

        const [ usuario ] = await conection('jogador').select('id').where('email',email);

        if(!usuario){
            throw new AppError('usuario não encontrado,faça seu cadastro',400);
        }

            const login = await conection('jogador')
                            .where({
                                    "senha":senha,
                                    'email':email
                                })
                            .select(['nome','email','senha']);


            return response.json(login);
    },
    async createUser(request,response){
        const { email,senha,nome,idade,sexo } = request.body;

        const createUserService = new CreateUser();

        const user = await createUserService.execute({ email,senha,nome,idade,sexo });

        return response.json(user);
    }
}