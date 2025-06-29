const connection = require('../config/connection');

require('../models/TagsModel');
require('../models/UserTypesModel');

connection.sync({force: true});