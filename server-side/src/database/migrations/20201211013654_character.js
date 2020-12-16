exports.up = function (knex) {
  return knex.schema.createTable("character", (table) => {
    table.string("id").notNullable();
    table.string("id_user").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("character");
};
