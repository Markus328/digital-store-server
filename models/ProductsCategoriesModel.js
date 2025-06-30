const { DataTypes, Model } = require("sequelize");
const { connection } = require("../config/connection");

class ProductsCategories extends Model {}

ProductsCategories.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Products",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Categories",
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
