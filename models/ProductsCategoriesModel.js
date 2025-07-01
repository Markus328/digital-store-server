const { DataTypes, Model } = require("sequelize");
const { connection } = require("../config/connection");
const ProductsModel = require("./ProductsModel");
const CategoriesModel = require("./CategoriesModel");

class ProductsCategories extends Model {}

ProductsCategories.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ProductsModel,
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CategoriesModel,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    model: "ProductsCategories",
    tableName: "ProductsCategories",
    timestamps: false,
  },
);

module.exports = ProductsCategories;
