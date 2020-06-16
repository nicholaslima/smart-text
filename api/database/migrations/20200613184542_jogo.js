
exports.up = function(knex) {
  return knex.schema.createTable('jogo',function(table){
      table.increments();
      table.string('pontuacao').notNullable();
      table.string('erros').notNullable();
      table.string('jogador_id').notNullable();
      table.foreign('jogador_id').references('id').inTable('jogador');
  })
};

exports.down = function(knex) {
   return knex.schema.dropTable('jogo');
};
