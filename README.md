### Backend (Node.js e Express)

#### Configuração Inicial do Projeto

1.  Crie um diretório para o projeto backend e inicialize um projeto Node.js:

    bash

    Copy code

    `mkdir brightflix-backend
    cd brightflix-backend
    npm init -y`

#### Instalação das Dependências Necessárias

1.  Instale as seguintes dependências:

    bash

    Copy code

    `npm install express mongoose bcryptjs jsonwebtoken body-parser`

#### Configuração do MongoDB

1.  Crie uma conta no MongoDB Atlas ou configure um servidor MongoDB localmente.
2.  Crie uma base de dados chamada `brightflix`.

#### Modelos de Dados (Schemas)

1.  Crie modelos para `User` e `Video` usando Mongoose.

#### Rotas

1.  Crie rotas para:
    -   Autenticação (`/login`).
    -   Adicionar vídeos (`/videos`), acessível apenas para administradores.
    -   Listar vídeos (`/videos`), acessível para todos os utilizadores logados.

### Frontend (ReactJS)

#### Configuração Inicial do Projeto

1.  Crie dois diretórios separados para o Front Office e o Back Office.
2.  Inicialize um projeto ReactJS em cada diretório:

    bash

    Copy code

    `npx create-react-app brightflix-frontend
    npx create-react-app brightflix-backoffice`

#### Instalação das Dependências Necessárias

1.  Instale as seguintes dependências em ambos os projetos:

    bash

    Copy code

    `npm install axios react-router-dom`

#### Configuração das Rotas

1.  Configure as rotas usando `react-router-dom` para:
    -   Tela de login.
    -   Listagem de vídeos (Front Office).
    -   Adição de novos vídeos (Back Office).

#### Autenticação

1.  Implemente a lógica de autenticação:
    -   Utilize axios para fazer requisições para o backend.
    -   Armazene o token JWT no localStorage após o login.
    -   Proteja as rotas sensíveis utilizando Higher-Order Components (HOCs) ou hooks.

#### Listagem e Adição de Vídeos

1.  No Front Office, crie uma página para listar os vídeos disponíveis.
2.  No Back Office, crie uma página para adicionar novos vídeos à base de dados.
