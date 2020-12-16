const connection = require("../database/connection.js");

class ComicsController {
  /* Metodo responsavel por adicionar historias em quadrinhos. */
  async create(req, res) {
    const { id } = req.body;
    const trx = await connection.transaction();
    trx("comics")
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

  /* Metodo responsavel por listar todos os comics */
  async indexAll(req, resp) {
    const idComics = req.params.id;
    const user = await connection("comics")
      .where("id_user", req.userId)
      .select("*");
    return resp.json(user);
  }

  /* Metodo responsavel por deletar historias em quadrinhos. */
  async delete(req, res) {
    const { id } = req.body;

    const trx = await connection.transaction();
    trx("comics")
      .where("id", id)
      .del()
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ message: "História removida dos favoritos" });
      })
      .catch((error) => {
        res.status(400).send({
          error:
            "Erro ao remover história dos favoritos! Tente novamente mais tarde.",
          errorServer: error,
        });
      }, trx.rollback);
  }
}
module.exports = new ComicsController();
