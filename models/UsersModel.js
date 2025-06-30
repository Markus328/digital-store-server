const { DataTypes, Model } = require("sequelize");
const { connection } = require("../config/connection");

class UsersModel extends Model {}

UsersModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Users",
    tableName: "Users",
    timestamps: true,
  },
);

module.exports = UsersModel;
