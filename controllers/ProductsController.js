
const ProductsModel = require('../models/ProductsModel');


class ProductsController {



    listar(request, response) {
        const dados = ProductsModel.listar();
        return response.json (dados);
    }
    consultarPorId(request, response){
        const id = request.params.id;
        const dados = ProductsModel.consultarPorId(id)
        return response.json(dados);
    }
    criar(request, response) {
        const body = request.body;
         ProductsModel.criar(body);
        return response.status(201).json({
            message:'Cadastrado com sucesso.'
        })
    }
    atualizar(request,response){
       const id = request.params.id;
       const body = request.body;
         ProductsModel.atualizar(id, body)
         return response.json({
            message: "Atualizado com sucesso."
         })
    }
    deletar(request, response){
        const id = request.params.id;
        ProductsModel.deletar(id)
        return response.json({
            message:'Deletado com sucesso.'
        })
    }

}
module.exports = ProductsController;