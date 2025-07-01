const ProductsModel = require("../models/ProductsModel");
const CategoriesModel = require("../models/CategoriesModel");
const ProductsCategoriesModel = require("../models/ProductsCategoriesModel");
const ProductsOptionsModel = require("../models/ProductOptionsModel.js");
const UsersModel = require("../models/UsersModel");
const { connection, testConnection } = require("../config/connection");

async function startConnection() {
  console.log("Iniciando conexão com o banco de dados...");
  if (!(await testConnection())) {
    return;
  }
  console.log("Sincronizando modelos com o banco de dados...");
  await connection.sync();
  require("../database/associations")();
}

module.exports = startConnection;
