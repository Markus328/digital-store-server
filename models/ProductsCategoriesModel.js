const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class ProductsCategories extends Model {}

ProductsCategories.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        },
          },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categories', 
          key: 'id'
        },
      },
    }, 
    {
  sequelize: connection,
  tableName: 'ProductsCategories',
  timestamps: true
    });
