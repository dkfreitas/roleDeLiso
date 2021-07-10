Sobre o Projeto
A API Role de Liso tem como objetivo criar uma plataforma onde serão publicados eventos da gratuito ou com preço popular.

Tecnologias utilizadas:
Ferramenta	Descrição
javascript	Linguagem de programação
nodejs	Ambiente de execução do javascript
express	Framework NodeJS
dotenv	Dependência para proteger dados sensíveis do projeto
mongoose	Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections
nodemon	Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente
npm ou yarn	Gerenciador de pacotes
MongoDb	Banco de dado não relacional orietado a documentos
MongoDb Compass	Interface gráfica para verificar se os dados foram persistidos
Insomnia ou Postman	Interface gráfica para realizar os testes

📁 Arquitetura
 📁 ProjetoFinal
   |
   |-  📁 src
   |    |
   |    |- 📁 data.config
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 roleController.js
   |         |
   |    |- 📁 model
   |         |- 📄 roleDeLiso.js
   |        
   |
   |    |- 📁 routes
   |         |- 📄 roleRoutes.js 
   |           |
   |- 📄 .env
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js


Contrato

>>Rotas
[x ] [GET] "/cadastro" Deverá retornar todos eventos/locais cadastrados
[x ] [POST] "/cadastro" Deverá criar um novo evento/local
[x ] [PATCH] "/cadastro/[ID]" Deverá atualizar informação específica de um cadastro por id e retornar o evento/local alterado.
[x ] [DELETE] "/cadastro/[ID]" Deverá deletar um cadastro por id específico e retornar uma mensagem de confirmação de deleção de evento.