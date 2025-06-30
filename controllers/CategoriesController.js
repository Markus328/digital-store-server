const CategoriesService = require("../services/CategoriesService");

class CategoriesController {
  async buscar(req, res) {
    let { limit, page, fields, use_in_menu } = req.query;

    if (fields) {
      fields = fields.split(",");
    }

    if (limit && page) {
      limit = parseInt(limit);
      page = parseInt(page);
    }
    try {
      const dados = await CategoriesService.listar(
        limit,
        page,
        fields,
        use_in_menu,
      );
      return res.json(dados);
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao buscar categorias",
        error: e.message,
      });
    }
  }
  async consultarPorId(req, res) {
    const id = req.params.id;
    const dados = await CategoriesService.consultarPorId(id);
    if (!dados) {
      return res.status(404).json({
        message: "Not Found: Categoria não encontrado",
      });
    }
    return res.json(dados);
  }
  async criar(req, res) {
    const body = req.body;
    try {
      await CategoriesService.criar(body);
      return res.json({
        message: "Criado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao criar categoria",
        error: e.message,
      });
    }
  }
  async atualizar(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      await CategoriesService.atualizar(id, body);
      return res.json({
        message: "Atualizado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao atualizar categoria",
        error: e.message,
      });
    }
  }
  async deletar(req, res) {
    const id = req.params.id;
    try {
      await CategoriesService.deletar(id);
      return res.json({
        message: "Deletado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao deletar categoria",
        error: e.message,
      });
    }
  }
}

module.exports = CategoriesController;
