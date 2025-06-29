const express = require('express');
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');
const cors = require('cors');

const host ="localhost"
const port = 3000;

const app = express()
app.use(express.json())
app.use(cors());
app.get('/',(request, response) => {
    return response.send("ÓLa, eu sou um backend c0m nodeJS + Express")
});
// ROTAS PRIVADAS
app.use(RotasPrivadas)
// ROTAS PUBLICAS
app.use(RotasPublicas)

app.put('/teste/:codigo', (request, response) => {
    // query
    const query = request.query;
    let dados = "Query: " + query.nome + "-" + query.sobrenome;

    //  params
    const params = request.params;
    dados += '<br> Params:' + params.codigo
    
    // Body
    const body = request.body;
    dados += "<br> Body:" + JSON.stringify(body);

    return response.send(dados);
});

app.listen(port, host ,() => {
    console.log(`Servidor executando em http://${host}:${port}`)
});