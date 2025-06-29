const UsuariosModel = require("../models/UsuariosModel");

class AuthController {
    login(login, senha) {
        const dados = UsuariosModel.authenticate(login, senha)
        return dados;

    }
}
 
module.exports = AuthController;