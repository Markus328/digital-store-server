import UsersModel from "../models/UsersModel.js";

class UserService {
  static async listar() {
    return await UserModel.findAll();
  }
  static async consultarPorId(id) {
    return await UserModel.findByPk(id);
  }

  static async criar(userData) {
    return await UserModel.create(userData);
  }

  static async atualizar(id, userData) {
    const user = await UserModel.findByPk(id);
    if (user) {
      return await user.update(userData);
    }
    return null;
  }

  static async deletar(id) {
    const user = await UserModel.findByPk(id);
    if (user) {
      await user.destroy();
      return user;
    }
    return null;
  }
}

module.exports = UserService;
