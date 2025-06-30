const ProductsModel = require("../models/ProductsModel");
const CategoriesModel = require("../models/CategoriesModel");
const ProductsCategoriesModel = require("../models/ProductsCategoriesModel");

module.exports = () => {
  ProductsModel.belongsToMany(CategoriesModel, {
    through: ProductsCategoriesModel,
    foreignKey: "product_id",
    otherKey: "category_id",
  });
  CategoriesModel.belongsToMany(ProductsModel, {
    through: ProductsCategoriesModel,
    foreignKey: "category_id",
    otherKey: "product_id",
  });
};
