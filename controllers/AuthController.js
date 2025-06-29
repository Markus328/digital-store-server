const UsersModel = require("../models/UsersModel");

class AuthController {
    login(login, senha) {
        const dados = UsersModel.authenticate(login, senha)
        return dados;

    }
}
 
module.exports = AuthController;