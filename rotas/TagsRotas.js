const express = require('express');
const TagsController = require("../controllers/TagsController");
const TagsRotas = express.Router();


tagsController = new TagsController();

TagsRotas.get('/tags', tagsController.listar);
TagsRotas.post('/tags', tagsController.criar);

module.exports = TagsRotas;

