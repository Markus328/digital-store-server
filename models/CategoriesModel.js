const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class Categories extends Model {}

Categories.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,    
  }
}, {
  sequelize: connection,
  tableName: 'Categories',
  timrestamps: true,
});

module.exports = Categories;
