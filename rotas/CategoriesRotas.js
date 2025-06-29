const express = require('express');
const CategoriesController = require('../controllers/CategoriesController');
const CategoriesRotas = express.Router();



const controller = new CategoriesController();

CategoriesRotas.get('/v1/category/search', controller.buscar);

CategoriesRotas.get('//v1/category/:id', controller.consultarPorId);

CategoriesRotas.post('/v1/category', controller.criar)

CategoriesRotas.put('/v1/category/:id', controller.atualizar);

CategoriesRotas.delete('/v1/category/:id',  controller.deletar);

module.exports = CategoriesRotas;