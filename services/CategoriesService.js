const CategoriesModel = require("../models/CategoriesModel.js");
const { Op } = require("sequelize");

class CategoriesService {
  static async listar(
    limit = 12,
    page = 1,
    match = "",
    fields = ["id", "name"],
    option = null,
  ) {
    const whereConditions = {};
    if (match) {
      whereConditions.name = {
        [Op.like]: `%${match}%`,
      };
    }
    if (option) {
      whereConditions.option = {
        [Op.eq]: option,
      };
    }

    return await CategoriesModel.findAll({
      where: whereConditions,
      limit: limit,
      attributes: fields,
      offset: (page - 1) * limit,
    });
  }

  static async consultarPorId(id) {
    return await CategoriesModel.findByPk(id);
  }

  static async criar(productData) {
    return await CategoriesModel.create(productData);
  }

  static async atualizar(id, productData) {
    const product = await CategoriesModelModel.findByPk(id);
    if (product) {
      return await product.update(productData);
    }
    return null;
  }

  static async deletar(id) {
    const product = await CategoriesModel.findByPk(id);
    if (product) {
      await product.destroy();
      return product;
    }
    return null;
  }
}

module.exports = CategoriesService;
