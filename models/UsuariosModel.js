class UsuariosModel {

    static lista =[
    {
        id: 1,
        nome:'admin',
        login:'admin',
        senha:"123123"
    },
    {
        id: 2,
        nome:'test',
        login:'test',
         senha:"123123"
    }
];
// autentificacao do login e senha 
static authenticate(login, senha) {
    const indice = UsuariosModel.lista.findIndex(item => item.login == login && item.senha == senha);
    return UsuariosModel.lista[indice];
}


static listar() {
return UsuariosModel.lista;

}
  static consultarPorId(id) {
    const dados = UsuariosModel.lista.filter(item => item.id == id);
    return dados;
}

static criar(data) {
    UsuariosModel.lista.push(data)
}
         
static atualizar(id, data) { 
    const indice = UsuariosModel.lista.findIndex(item => item.id == id);
   UsuariosModel.lista[indice] = data;
}
static deletar(id) {
    const dados = UsuariosModel.lista.filter(item => item.id != id);
    UsuariosModel.lista = dados;
    
}

}

module.exports = UsuariosModel;