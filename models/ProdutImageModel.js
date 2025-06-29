const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class ProductImage extends Model {}

ProductImage.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
    key: 'id',
    model: 'products',
}
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  path:{
    type: DataTypes.STRING(255),
    allowNull: false,
  }  
}, 
{
  sequelize: connection,
  modelName: "ProductImage",
  tableName: 'productsImages',
  timestamps: false,
});

module.exports = ProductImage;
