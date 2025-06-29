const express = require('express');
const PostController = require('../controllers/PostController');
const PostRotas = express.Router();


const postController = new PostController();

PostRotas.get('/post', postController.listar);

PostRotas.get('/post/:id', postController.consultarPorId);

PostRotas.post('/post', postController.criar)

PostRotas.put('/post/:id', postController.atualizar);

PostRotas.delete('/post/:id',  postController.deletar);

module.exports = PostRotas;
