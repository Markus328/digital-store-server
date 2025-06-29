const express = require('express');
const UsersController = require('../controllers/UsersController');
const UsersRotas = express.Router();


const controller = new UsersController();

UsersRotas.get('/v1/user/:id', controller.consultarPorId);
UsersRotas.post('/v1/user', controller.criar)
UsersRotas.put('/v1/user/:id', controller.atualizar);
UsersRotas.delete('/v1/user/:id',  controller.deletar);

module.exports = UsersRotas;
