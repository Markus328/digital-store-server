const UserService = require("../services/UserService");

class UserController {
  listar(request, response) {
    const dados = UserService.listar();
    return response.json(dados);
  }
  consultarPorId(request, response) {
    const id = request.params.id;
    const dados = UserService.consultarPorId(id);
    return response.json(dados);
  }
  criar(request, response) {
    const body = request.body;
    UserService.criar(body);
    return response.status(201).json({
      message: "Usuario cadastrado com sucesso.",
    });
  }
  atualizar(request, response) {
    const id = request.params.id;
    const body = request.body;
    UserService.atualizar(id, body);
    return response.json({
      message: "Usuario atualizado com sucesso.",
    });
  }
  deletar(request, response) {
    const id = request.params.id;
    UserService.deletar(id);
    return response.json({
      message: "Usuario deletado com sucesso.",
    });
  }
}
module.exports = UserController;
