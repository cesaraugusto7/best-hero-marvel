const connection = require("../database/connection.js");
const authConfig = require("../config/auth.json");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

class AuthController {
  /* Função que efetua login e retorna dados do usuario e o token JWT */
  async singin(req, res) {
    const { email, password } = req.body;
    const hashPassword = await crypto
      .createHash("md5")
      .update(password)
      .digest("hex");

    const user = await connection("user")
      .where({ email: email, password: hashPassword })
      .select("id", "name", "birthday", "phone", "best_hero", "email");
    if (user.length == 0) {
      res.status(400).send({ error: "E-mail ou senha incorretos!" });
    } else {
      const token = jwt.sign({ id: user[0].id }, authConfig.secret, {
        expiresIn: 604800,
      });
      console.log(user);
      res.status(201).send({ user: user[0], token: token });
    }
  }
  async change(req, res) {
    const { password, new_password } = req.body;
    const hashPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");
    const hashNewPassword = crypto
      .createHash("md5")
      .update(new_password)
      .digest("hex");

    const user = await connection("user")
      .where({ password: hashPassword })
      .select("id");

    if (user.length == 0) {
      return res.status(401).send({ error: "Senha autal incorreta!" });
    } else {
      const trx = await connection.transaction();
      trx("user")
        .where("id", req.userId)
        .update({
          password: hashNewPassword,
        })
        .then(trx.commit)
        .then(() => {
          res.status(201).send({ message: "Senha alterada com sucesso!" });
        })
        .catch((error) => {
          res.status(400).send({
            error: "Erro ao alterar senha! Tente novamente mais tarde.",
            errorServer: error,
          });
        }, trx.rollback);
    }
  }
}
module.exports = new AuthController();
