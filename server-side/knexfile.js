if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
module.exports = {
  /**?
   * Configuraçẽos do do banco Utilizado para desenvolvimento SQlite
   */

  /**?
   * Configuraçẽos do do banco Utilizado para desenvolvimento PostgreSQL
   */
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_KEY,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },

  /**?
   * Configuraçẽos do do banco Utilizado para desenvolvimento em grupo time de desenvolvimento
   */
  staging: {
    client: "postgresql",
    connection: {
      database: "teste",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  /**?
   * Configuraçẽos do do banco Utilizado para para implementação da aplicação
   */

  production: {
    client: "postgresql",
    connection: {
      database: "Namedatabase",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
