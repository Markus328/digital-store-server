const express = require("express");

const startConnection = require("./scripts/startConnection");

async function startServer() {
  await startConnection();

  const CategoriesModel = require("./models/CategoriesModel");
  const ProductsModel = require("./models/ProductsModel");
  const UsersModel = require("./models/UsersModel");

  const cors = require("cors");
  const RotasPrivadas = require("./rotas/RotasPrivadas");
  const RotasPublicas = require("./rotas/RotasPublicas");

  const host = "localhost";
  const port = 3000;

  const app = express();
  app.use(express.json());
  app.use(cors());
  // ROTAS PRIVADAS
  app.use(RotasPrivadas);
  // ROTAS PUBLICAS
  app.use(RotasPublicas);

  app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);
  });
}

startServer();
