exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.date("birthday").notNullable();
    table.string("phone").notNullable();
    table.string("best_hero").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable();
    /*     table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at"); */
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
