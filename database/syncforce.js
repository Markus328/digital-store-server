const connection = require('../config/connection');

connection.sync({force: true});