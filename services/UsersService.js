const UsersModel = require("../models/UsersModel.js");
const { Op } = require("sequelize");

class UsersService {
  static async consultarPorId(id) {
    return await UsersModel.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
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
