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
    type: DataTypes.BOOLEAN(0),
    allowNull: true,
    defaultValue: false
    
  },
  slug: {
    type: DataTypes.STRING(45),
    allowNull: false,
    
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN(0),
    allowNull: true,
    defaultValue: false

  },
  stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      price_with_discount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      
},
{
 sequelize: connection,
  tableName: 'Categories',
  timestamps: true
});


module.exports = ProductsModel;
