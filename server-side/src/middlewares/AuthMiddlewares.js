const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: "Token não informado." });
  }
  const partsToken = authHeader.split(" ");

  if (!partsToken.length == 2) {
    return res.status(401).send({ error: "Erro no token." });
  }
  const [scheme, token] = partsToken;

  if (!scheme.includes("Bearer")) {
    return res.status(401).send({ error: "Erro no formato do token." });
  }
  await jwt.verify(token, authConfig.secret, function (err, decoded) {
    if (err) return res.status(401).send({ error: "Token invalido." });

    req.userId = decoded.id;
    return next();
  });
};
