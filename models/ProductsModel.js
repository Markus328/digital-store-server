const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class ProductsModel extends Model {


static listar() {
return ProductsModel.lista;

}
  static consultarPorId(id) {
    const dados = ProductsModel.lista.filter(item => item.id == id);
    return dados;
}

static criar(data) {
    ProductsModel.lista.push(data)
}
         
static atualizar(id, data) { 
    const indice = ProductsModel.lista.findIndex(item => item.id == id);
   ProductsModel.lista[indice] = data;
}
static deletar(id) {
    const dados = ProductsModel.lista.filter(item => item.id != id);
    ProductsModel.lista = dados;
    
}

}

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
