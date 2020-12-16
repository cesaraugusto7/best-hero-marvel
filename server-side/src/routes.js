const express = require("express");
const routes = express.Router();
const userController = require("./controllers/UserController");
const characterController = require("./controllers/CharacterController");
const comicsController = require("./controllers/ComicsController");
const authController = require("./controllers/AuthController");
const authMiddlewares = require("./middlewares/AuthMiddlewares");

/* rotas de criar atualizar e listar usuarios */
routes.post("/user", userController.create);
routes.put("/user", authMiddlewares, userController.update);
routes.get("/user", userController.index);

/* rotas de adicionar e excluir personagens dos favoritos */
routes.post("/character", authMiddlewares, characterController.create);
routes.delete("/character", authMiddlewares, characterController.delete);
routes.get("/character", authMiddlewares, characterController.indexAll);

/* rotas de adicionar e excluir historias em quadrinhos dos favoritos */
routes.post("/comics", authMiddlewares, comicsController.create);
routes.delete("/comics", authMiddlewares, comicsController.delete);
routes.get("/comics", authMiddlewares, comicsController.indexAll);

/* rotas de autenticação e  alteração e senha */
routes.post("/auth", authController.singin);
routes.put("/auth", authMiddlewares, authController.change);

module.exports = routes;
