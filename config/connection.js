const { Sequelize } = require("sequelize");
require("dotenv").config();

const connection = new Sequelize({
  dialect: "mysql",
  database: "digital-store",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

async function testConnection() {
  try {
    await connection.authenticate();
    console.log("A conexão com o banco de dados foi estabelecida com sucesso.");
    return true;
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
    return false;
  }
}

module.exports = { connection, testConnection };
