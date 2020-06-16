
const api = require('../helper/conexao');

module.exports = {
    async index(request,response){
        const textos = await api('texto').select('*');

        return response.json(textos);
    },
    async post(request,response){
        const texto = request.body;

        await api('texto').insert(texto);

        return response.json({
            "mensagem": "texto cadastrado com sucesso"
        });
    }
}