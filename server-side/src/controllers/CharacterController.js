const connection = require("../database/connection.js");

class CharacterController {
  /* Metodo responsavel por adicionar personagens em quadrinhos. */
  async create(req, res) {
    const { id } = req.body;
    const trx = await connection.transaction();

    trx("character")
      .insert({ id: id, id_user: req.userId })
      .then(trx.commit)
      .then(() => {
        res
          .status(201)
          .send({ message: "Personagem adicionado aos favoritos!" });
      })
      .catch((error) => {
        res.status(400).send({
          error:
            "Erro ao adicionar personagem aos favoritos! Tente novamente mais tarde.",
          errorServer: error,
        });
      }, trx.rollback);
  }

  /* Metodo responsavel por listar todos os characters */
  async indexAll(req, resp) {
    const user = await connection("character")
      .where("id_user", req.userId)
      .select("*");
    return resp.json(user);
  }

  /* Metodo responsavel por deletar personagens */
  async delete(req, res) {
    const { id } = req.body;
    const trx = await connection.transaction();

    trx("character")
      .where("id", id)
      .del()
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ message: "Personagem removido dos favoritos" });
      })
      .catch((error) => {
        res.status(400).send({
          error:
            "Erro ao remover personagem dos favoritos! Tente novamente mais tarde.",
          errorServer: error,
        });
      }, trx.rollback);
  }
}
module.exports = new CharacterController();
