const CategoriesModel = require('../models/CategoriesModel');

class CategoriesController {
  async listar(req, res) {
    const dados = await CategoriesModel.findAll();
    return res.json(dados);
  }

  async criar(req, res) {
    try {
      const body = req.body;
      const novaTag = await CategoriesModel.create(body);
      return res.status(201).json({
        message: "tag criada com sucesso",
        tag: novaTag
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = CategoriesController;
