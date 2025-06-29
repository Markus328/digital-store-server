const express = require('express');
const jwt = require('jsonwebtoken');
const AuthController = require('../controllers/AuthController');
require ('dotenv').config();


const RotasPublicas = express.Router();

RotasPublicas.post('/login',(request, response) => {
    const body = request.body;
    const auth = new AuthController();
    const dados =auth.login(body.login, body.senha);
    if(dados) {
        // jwt json web token
        // uma autorizacao para descripotografas
        // Process.env.app.token vem da pasta .env guardar a chave
        const token =jwt.sign(dados, process.env.APP_KEY_TOKEN)
        return response.json({
            token: token
        })
    }
    return response.json({
        message:"Login ou Senha Incorreto"
    })

});






module.exports =  RotasPublicas;