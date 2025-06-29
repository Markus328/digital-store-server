const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const ProductsRotas = express.Router();


const productsController = new ProductsController();

ProductsRotas.get('/post', productsController.listar);

ProductsRotas.get('/post/:id', productsController.consultarPorId);

ProductsRotas.post('/post', productsController.criar)

ProductsRotas.put('/post/:id', productsController.atualizar);

ProductsRotas.delete('/post/:id',  productsController.deletar);

module.exports = ProductsRotas;
