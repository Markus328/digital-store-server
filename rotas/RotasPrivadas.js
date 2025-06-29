const express = require('express');
const UsuariosRotas = require('./usuariosRotas');
const PostRotas = require('./PostRotas');
const jwt =require('jsonwebtoken');
require ('dotenv').config();
const TagsRotas = require("./TagsRotas");


const RotasPrivadas = express.Router();

// MIDDLEWARE
RotasPrivadas.use((request, response, next) => {
  
    let auth = true;
    // token
// se for a senha igual 12345 ,entra
    if(request.headers.token ) {
        const { token } = request.headers;
        try{
             jwt.verify(token, process.env.APP_KEY_TOKEN);
        auth = true; 
        } catch(e) {
            return response.status(403).send(e);
        }
    //    try e catch trata o erro e encaminha nao autorizado
    }
        if(auth === false){
        return response.status(403).send('Nao Autorizado');
    } 
       next();

});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostRotas);
RotasPrivadas.use(TagsRotas);

module.exports =  RotasPrivadas;