import ProductsModel from "../models/ProductsModel.js";

class ProductsService {
  static async listar(
    limit,
    page,
    match,
    fields,
    category_ids,
    price_range,
    option,
  ) {
    return await ProductsModel.findAll({
      where: {
        name: {
          [Op.like]: `%${match}%`,
        },
        category_id: {
          [Op.in]: category_ids,
        },
        price: {
          [Op.between]: price_range,
        },
        option: {
          [Op.eq]: option,
        },
      },
      limit: limit,
      attributes: fields,
      offset: (page - 1) * limit,
    });
  }

  static async consultarPorId(id) {
    return await ProductsModel.findByPk(id);
  }

  static async criar(productData) {
    return await ProductsModel.create(productData);
  }

  static async atualizar(id, productData) {
    const product = await ProductsModel.findByPk(id);
    if (product) {
      return await product.update(productData);
    }
    return null;
  }

  static async deletar(id) {
    const product = await ProductsModel.findByPk(id);
    if (product) {
      await product.destroy();
      return product;
    }
    return null;
  }
}

module.exports = ProductsService;
