# 🛍️ Loja Online - Backend

Este repositório contém o backend de uma aplicação de loja online, desenvolvido em Node.js com Express, Sequelize e autenticação via JWT. Ele é responsável por gerenciar usuários, produtos, categorias, imagens, opções de produtos e suas respectivas operações de CRUD.

## 🎯 Escopo do Projeto

Este backend possui funcionalidades essenciais para uma loja virtual, como:

- Cadastro e autenticação de usuários
- Gerenciamento de produtos, categorias e imagens
- Associações entre produtos e categorias
- Controle de acesso via JWT
- Testes automatizados com Jest
- Integração com banco de dados relacional (MySQL)

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente para execução de JavaScript no servidor  
- **Express.js** – Framework web para criação de APIs REST  
- **Dotenv** – Gerenciamento seguro de variáveis de ambiente  
- **Nodemon** – Ferramenta de auto-reload durante o desenvolvimento  
- **MySQL** – Banco de dados relacional  
- **Sequelize** – ORM para modelagem e manipulação de dados  
- **JWT** – Autenticação segura via JSON Web Token  
- **Jest** – Framework de testes para garantir a qualidade do código

## 📁 Estrutura de Diretórios

project-root/
├── src/
│ ├── config/ # Configurações do banco, JWT, etc.
│ ├── controllers/ # Lógica das rotas
│ ├── middleware/ # Middlewares como autenticação
│ ├── models/ # Modelos Sequelize
│ ├── routes/ # Definições das rotas da API
│ ├── services/ # Regras de negócio
│ ├── app.js # Configuração principal da aplicação
│ └── server.js # Inicialização do servidor
├── tests/ # Testes automatizados com Jest
├── .env # Variáveis de ambiente
├── .gitignore
└── package.json


## 📡 Códigos de Resposta HTTP

| Código | Significado |
|--------|-------------|
| `200 OK` | Requisição executada com sucesso (com retorno de dados) |
| `201 Created` | Novo recurso criado com sucesso |
| `204 No Content` | Ação executada sem retorno de dados (ex: DELETE) |
| `400 Bad Request` | Erro na requisição (parâmetros ou dados inválidos) |
| `401 Unauthorized` | Falta ou invalidez de autenticação JWT |
| `404 Not Found` | Recurso solicitado não encontrado |
