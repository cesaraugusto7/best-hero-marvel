exports.up = function (knex) {
  return knex.schema.createTable("comics", (table) => {
    table.string("id").notNullable();
    table.string("id_user").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comics");
};
