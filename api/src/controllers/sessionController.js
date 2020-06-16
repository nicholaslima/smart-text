
const api = require('../helper/conexao.js');

module.exports = {
    async login(request,response){
        const { email,senha } = request.body;

        const [ usuario ] = await api('jogador').select('id').where('email',email);

        if(usuario !== undefined){
            const login = await api('jogador')
                            .where({
                                    "senha":senha,
                                    'email':email
                                })
                            .select(['nome','email','senha']);

            return response.json(login);
        }else{
            return response.json({
                "mensagem":"usuario não encontrado, realize seu cadastro"
            });
        }
    }
}