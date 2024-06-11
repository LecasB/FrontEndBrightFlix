Backend (Node.js e Express)

Configuração Inicial do Projeto

Cria um diretório para o projeto backend e inicializa um projeto Node.js:
bash
Copy code
mkdir brightflix-backend
cd brightflix-backend
npm init -y
Instalação das Dependências Necessárias

Instala as seguintes dependências:
bash
Copy code
npm install express mongoose bcryptjs jsonwebtoken body-parser
Configuração do MongoDB

Cria uma conta no MongoDB Atlas ou configura um servidor MongoDB localmente.
Cria uma base de dados chamada brightflix.
Modelos de Dados (Schemas)

Cria modelos para User e Video usando Mongoose.
Rotas

Cria rotas para:
Autenticação (/login).
Adicionar vídeos (/videos), acessível apenas para administradores.
Listar vídeos (/videos), acessível para todos os utilizadores logados.
Frontend (ReactJS)

Configuração Inicial do Projeto

Cria dois diretórios separados para o Front Office e o Back Office.
Inicializa um projeto ReactJS em cada diretório:
bash
Copy code
npx create-react-app brightflix-frontend
npx create-react-app brightflix-backoffice
Instalação das Dependências Necessárias

Instala as seguintes dependências em ambos os projetos:
bash
Copy code
npm install axios react-router-dom
Configuração das Rotas

Configura as rotas usando react-router-dom para:
Tela de login.
Listagem de vídeos (Front Office).
Adição de novos vídeos (Back Office).
Autenticação

Implementa a lógica de autenticação:
Utiliza axios para fazer requisições para o backend.
Armazena o token JWT no localStorage após o login.
Protege as rotas sensíveis utilizando Higher-Order Components (HOCs) ou hooks.
Listagem e Adição de Vídeos

No Front Office, cria uma página para listar os vídeos disponíveis.
No Back Office, cria uma página para adicionar novos vídeos à base de dados.
