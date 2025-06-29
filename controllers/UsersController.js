
const UsersModel = require('../models/UsersModel');


class UsersController {



    listar(request, response) {
        const dados = UsersModel.listar();
        return response.json (dados);
    }
    consultarPorId(request, response){
        const id = request.params.id;
        const dados = UsersModel.consultarPorId(id)
        return response.json(dados);
    }
    criar(request, response) {
        const body = request.body;
         UsersModel.criar(body);
        return response.status(201).json({
            message:'Usuario cadastrado com sucesso.'
        })
    }
    atualizar(request,response){
       const id = request.params.id;
       const body = request.body;
         UsersModel.atualizar(id, body)
         return response.json({
            message: "Usuario atualizado com sucesso."
         })
    }
    deletar(request, response){
        const id = request.params.id;
        UsersModel.deletar(id)
        return response.json({
            message:'Usuario deletado com sucesso.'
        })
    }

}
module.exports = UsersController;