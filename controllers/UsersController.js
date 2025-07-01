const UsersService = require("../services/UsersService");

class UsersController {
  async consultarPorId(req, res) {
    const id = req.params.id;
    const dados = await UsersService.consultarPorId(id);
    if (!dados) {
      return res.status(404).json({
        message: "Not Found: Usuário não encontrado.",
      });
    }
    return res.json(dados);
  }
  async criar(req, res) {
    const body = req.body;
    try {
      await UsersService.criar(body);
      return res.json({
        message: "Usuário cadastrado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao cadastrar usuário.",
        error: e.message,
      });
    }
  }
  async atualizar(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      await UsersService.atualizar(id, body);
      return res.json({
        message: "Cadastro de usuário atualizado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao atualizar cadastro de usuário.",
        error: e.message,
      });
    }
  }
  async deletar(req, res) {
    const id = req.params.id;
    try {
      await UsersService.deletar(id);
      return res.json({
        message: "Usuário deletado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao deletar usuário.",
        error: e.message,
      });
    }
  }
}
module.exports = UsersController;
