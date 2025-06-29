const express = require('express');
const UsersController = require('../controllers/UsersController');
const UsersRotas = express.Router();


const controller = new UsersController();

UsersRotas.get('/users', controller.listar);
UsersRotas.get('/users/:id', controller.consultarPorId);
UsersRotas.post('/users', controller.criar)
UsersRotas.put('/users/:id', controller.atualizar);
UsersRotas.delete('/users/:id',  controller.deletar);

module.exports = UsersRotas;
