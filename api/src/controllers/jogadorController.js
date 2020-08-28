
const api = require('../helper/conexao.js');
const jogadorRepository = require('../repository/JogadorRepository');
const { response } = require('express');

const Repository = new jogadorRepository();

module.exports = {
    async post(request,response){
        const jogador = request.body;

        const cadastrado = await api('jogador').insert(jogador);

        return response.json(cadastrado);
    },
    async index(request,response){
        const jogadores = await api('jogador').select('*');

        return response.json(jogadores);
    },
    async find(request,response){
       const { id } =  request.params;
        
       const jogador = await Repository.findJogador(id);

       return response.json(jogador);

    }
    
}