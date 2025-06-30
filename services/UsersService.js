const UsersModel = require("../models/UsersModel.js");
const CategoriesModel = require("../models/CategoriesModel.js");
const { Op } = require("sequelize");

class UsersService {
  static async listar(
    limit = 12,
    page = 1,
    match = "",
    fields = ["id", "name", "price"],
    category_ids = [],
    price_range = [0, 1000],
    option = null,
  ) {
    const whereConditions = {};
    if (match) {
      whereConditions.name = {
        [Op.like]: `%${match}%`,
      };
    }
    if (price_range && price_range.length === 2) {
      whereConditions.price = {
        [Op.between]: price_range,
      };
    }
    if (option) {
      whereConditions.option = {
        [Op.eq]: option,
      };
    }

    const include = [];
    if (category_ids && category_ids.length > 0) {
      include.push({
        model: CategoriesModel,
        where: { id: { [Op.in]: category_ids } },
        required: true,
      });
    }

    return await UsersModel.findAll({
      where: whereConditions,
      limit: limit,
      attributes: fields,
      offset: (page - 1) * limit,
      include: include,
    });
  }

  static async consultarPorId(id) {
    return await UsersModel.findByPk(id);
  }

  static async criar(productData) {
    return await UsersModel.create(productData);
  }

  static async atualizar(id, productData) {
    const product = await UsersModel.findByPk(id);
    if (product) {
      return await product.update(productData);
    }
    return null;
  }

  static async deletar(id) {
    const product = await UsersModel.findByPk(id);
    if (product) {
      await product.destroy();
      return product;
    }
    return null;
  }
}

module.exports = UsersService;
