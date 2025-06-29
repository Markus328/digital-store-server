const connection = require('../config/connection');
const { DataTypes } = require("sequelize");

const UserTypesModel = connection.define(
    "UserTypesModel",
    {
        type:{
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        tableName:"user_types"
    }
);

module.exports = UserTypesModel;