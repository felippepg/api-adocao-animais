# API ADOÇÃO DE ANIMAIS

<h1 align="center">
    <img alt="Logo" title="Adoção de Animais" src="./src/img/logo.png" />
</h1>

## Descrição do Projeto
Esse projeto tem como intuito criar uma API para ser utilizada como backend de um Sistema de adoção de animais, no qual
é possivel um CRUD envolvendo animais, usuários e adoção desses pets com os respectivos usuários. Além disso a API conta
com um sistema de login, e para segurança das requisições é necessário a autenticação com um token JWT.
O Projeto foi desenvolvido em Node, juntamente com Typescript e o Prisma como ORM.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com),[Node.js](https://nodejs.org/en/), além disto é bom ter um editor para trabalhar com o código como
[VSCode](https://code.visualstudio.com/). Também é necessário um servidor de banco de dados, nessa aplicação o serviço
escolhido foi o [MySQL](https://www.mysql.com/).

### 🎲 Rodando a Projeto

```bash
# Clone este repositório
$ git clone <https://github.com/felippepg/api-adocao-animais>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-adocao-animais

# Baixar todas as dependencias necessárias para rodar o projeto
$ yarn OU npm install (dependendo do seu gerenciador de pacotes)

# Para iniciar o projeto em modo de desenvolvedor
$ yarn dev ou npm run dev

# Para iniciar o projeto em modo de desenvolvedor
$ yarn dev ou npm run dev

# Para rodar os testes é necessario configurar um banco de dados específico para isso

# Para rodar os testes
$ yarn test
```

As seguintes tecnologias foram usadas na construção da API:

- [MYSQL](https://www.mysql.com/)
- [PRISMA ORM](https://www.prisma.io/)
- [TYPESCRIPT](https://www.typescriptlang.org/)
- [NODE.JS](https://nodejs.org/en/)
- [JEST](https://jestjs.io/pt-BR/)
- [ESLINT](https://eslint.org/)
- [PRETTIER](https://prettier.io/)
- [JWT](https://jwt.io/)


## Features

- [x] Criação de usuário
- [x] CRUD Situação do Pet
- [x] CRUD Tipo de Pet
- [x] Autenticação
- [x] Adoção de aniamais
- [x] Atualização do cadastro de usuário
- [x] Rotas da Aplicação protegidas
