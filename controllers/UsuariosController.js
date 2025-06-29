
const UsuariosModel = require('../models/UsuariosModel');


class UsuariosController {



    listar(request, response) {
        const dados = UsuariosModel.listar();
        return response.json (dados);
    }
    consultarPorId(request, response){
        const id = request.params.id;
        const dados = UsuariosModel.consultarPorId(id)
        return response.json(dados);
    }
    criar(request, response) {
        const body = request.body;
         UsuariosModel.criar(body);
        return response.status(201).json({
            message:'Usuario cadastrado com sucesso.'
        })
    }
    atualizar(request,response){
       const id = request.params.id;
       const body = request.body;
         UsuariosModel.atualizar(id, body)
         return response.json({
            message: "Usuario atualizado com sucesso."
         })
    }
    deletar(request, response){
        const id = request.params.id;
        UsuariosModel.deletar(id)
        return response.json({
            message:'Usuario deletado com sucesso.'
        })
    }

}
module.exports = UsuariosController;