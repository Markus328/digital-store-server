const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const ProductsRotas = express.Router();


const productsController = new ProductsController();

ProductsRotas.get('/v1/product/search', productsController.buscar);

ProductsRotas.get('/v1/product/:id', productsController.consultarPorId);

ProductsRotas.post('/v1/product', productsController.criar)

ProductsRotas.put('/v1/product/:id', productsController.atualizar);

ProductsRotas.delete('/v1/product/:id',  productsController.deletar);

module.exports = ProductsRotas;
