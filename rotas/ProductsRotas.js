const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const ProductsRotas = express.Router();


const productsController = new ProductsController();

ProductsRotas.get('/products', productsController.listar);

ProductsRotas.get('/products/:id', productsController.consultarPorId);

ProductsRotas.post('/products', productsController.criar)

ProductsRotas.put('/products/:id', productsController.atualizar);

ProductsRotas.delete('/products/:id',  productsController.deletar);

module.exports = ProductsRotas;
