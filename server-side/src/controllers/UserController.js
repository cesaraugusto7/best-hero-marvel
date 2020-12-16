const connection = require("../database/connection.js");
const crypto = require("crypto");

class UserController {
  /* Metodo responsavel por criar um novo usuário */
  async create(req, res) {
    const { name, birthday, phone, best_hero, email, password } = req.body;

    const hashPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");

    const newBirthday = new Date(birthday + " 00:00:00");

    /*  cria uma transação para que caso ocorra qualquer erro durante o processo de de create, seja possivel fazer rollback  */
    const trx = await connection.transaction();
    trx("user")
      .insert({
        name: name.toUpperCase(),
        birthday: newBirthday,
        phone: phone,
        best_hero: best_hero,
        email: email,
        password: hashPassword,
        updated_at: connection.fn.now(),
      })
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ message: "Usuário salvo com sucesso!" });
      })
      .catch((error) => {
        res.status(400).send({
          error: "Erro ao criar conta! Tente novamente mais tarde.",
          errorServer: error,
        });
      }, trx.rollback);
  }
  /* Metodo responsavel por fazer update */
  async update(req, res) {
    const { name, birthday, phone, best_hero, email } = req.body;
    const newBirthday = new Date(birthday + " 00:00:00");
    /*  cria uma transação para que caso ocorra qualquer erro durante o processo de de update, seja possivel fazer rollback  */
    const trx = await connection.transaction();
    trx("user")
      .where("id", req.userId)
      .update({
        name: name.toUpperCase(),
        birthday: newBirthday,
        phone: phone,
        best_hero: best_hero,
        email: email,
        updated_at: connection.fn.now(),
      })
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ message: "Usuário atualizado com sucesso!" });
      })
      .catch((error) => {
        res.status(400).send({
          error:
            "Erro ao atualizar dados do usuário! Tente novamente mais tarde.",
          errorServer: error,
        });
      }, trx.rollback);
  }
  /* Metodo responsavel por listar os dados de um usuario */
  async index(req, resp) {
    const user = await connection("user")
      .where("id", req.userId)
      .select("name", "birthday", "phone", "best_hero", "email");
    return resp.json(user);
  }
}
module.exports = new UserController();
