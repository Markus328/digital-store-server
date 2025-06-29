const {Sequelize} = require("sequelize");

const connection = new Sequelize({
    dialect:"mysql",
    database:'blog',
    host:'localhost',
    port: 3306,
    username:'root',
    password:'root'
});

module.exports = connection;

