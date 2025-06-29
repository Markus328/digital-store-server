const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class Tags extends Model {}

Tags.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  }
}, {
  sequelize: connection,
  tableName: 'tags',
});

module.exports = Tags;
