
const conection = require('../helper/conection');

module.exports = {
    async index(request,response){
        const textos = await conection('texto').select('*');

        return response.json(textos);
    },
    async post(request,response){
        const texto = request.body;

        await conection('texto').insert(texto);

        return response.json(texto);
    }
}