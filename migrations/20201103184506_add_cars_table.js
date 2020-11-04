
exports.up = function(knex) {
  return knex.schema.createTable('cars', (tbl) => {
      tbl.increments('id')
      tbl.string('vin', 28).unique().notNullable()
      tbl.string('make', 28).notNullable()
      tbl.string('model', 28).notNullable()
      tbl.integer('milage', 28).notNullable()
      tbl.string('transmission', 28)
      tbl.string('title')
     
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
