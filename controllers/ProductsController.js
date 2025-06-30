const ProductsService = require("../services/ProductsService");

class ProductsController {
  async buscar(req, res) {
    let { limit, page, match, fields, category_ids, price_range, option } =
      req.query;

    if (fields) {
      fields = fields.split(",");
    }
    if (category_ids) {
      category_ids = category_ids.split(",");
    }
    if (price_range) {
      price_range = price_range.split(",");
    }

    if (limit && page) {
      limit = parseInt(limit);
      page = parseInt(page);
    }
    try {
      const dados = await ProductsService.listar(
        limit,
        page,
        match,
        fields,
        category_ids,
        price_range,
        option,
      );
      return res.json(dados);
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao buscar produtos",
        error: e.message,
      });
    }
  }
  async consultarPorId(req, res) {
    const id = req.params.id;
    try {
      const dados = await ProductsService.consultarPorId(id);
      return res.json(dados);
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao consultar produto por ID",
        error: e.message,
      });
    }
  }
  async criar(req, res) {
    const body = req.body;
    try {
      await ProductsService.criar(body);
      return res.json({
        message: "Criado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao criar produto",
        error: e.message,
      });
    }
    return res.json({
      message: "Criado com sucesso.",
    });
  }
  async atualizar(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      await ProductsService.atualizar(id, body);
      return res.json({
        message: "Atualizado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao atualizar produto",
        error: e.message,
      });
    }
  }
  async deletar(req, res) {
    const id = req.params.id;
    try {
      await ProductsService.deletar(id);
      return res.json({
        message: "Deletado com sucesso.",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Bad Request: Erro ao deletar produto",
        error: e.message,
      });
    }
  }
}

module.exports = ProductsController;
