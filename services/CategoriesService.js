import CategoriesModel from "../models/CategoriesModel.js";

class CategoriesService {
  static async listar(limit, page, fields, use_in_menu) {
    return await CategoriesModel.findAll({
      limit,
      offset: (page - 1) * limit,
      attributes: fields,
      where: { use_in_menu },
    });
  }

  static async consultarPorId(id) {
    return await CategoriesModel.findByPk(id);
  }

  static async criar(categoryData) {
    return await CategoriesModel.create(categoryData);
  }

  static async atualizar(id, categoryData) {
    const category = await CategoriesModel.findByPk(id);
    if (category) {
      return await category.update(categoryData);
    }
    return null;
  }

  static async deletar(id) {
    const category = await CategoriesModel.findByPk(id);
    if (category) {
      await category.destroy();
      return category;
    }
    return null;
  }
}

module.exports = CategoriesService;
