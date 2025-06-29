const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class ProductsModel extends Model {}

ProductsModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    
  }
}, {
  sequelize: connection,
  tableName: 'tags',
});


module.exports = ProductsModel;
