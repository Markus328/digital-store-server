const express = require("express");

const {
  connection,
  testConnection,
  startConnection,
} = require("./config/connection");

async function startServer() {
  await startConnection();

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
