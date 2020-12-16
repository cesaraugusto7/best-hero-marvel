# Best Hero Server-Side

## Instruções para executar o server-side localmente

Antes de mais nada e necessario instalar o NodeJs, e logo em seguida o <b>yarn.</b>

[NodeJS] (https://nodejs.org/en/)

[YARN] (https://classic.yarnpkg.com/en/)

Com o NodeJs instalado execute o comando para baixar todas as dependências do projeto.

```npm install```

Crie um arquivo <b>.env</b> e configure as variáveis de ambiente seguindo o padrão abaixo de acordo com as configurações de seu banco de dados. 
Obs: A variável <b>NODE_ENV</b> deve permanecer com o valor "dev" para que a aplicação seja executada localmente. O banco de dados utilizado foi o PostgreSQL, portanto devido a funcionalidades e recursos que ele oferece é importante que o mesmo seja utilizado na utilização do server-side.

```DB_KEY ='data_base_password'
DB_USER ='data_base_user'
DB_HOST ='data_base_host'
DB_NAME ='data_base_name'
NODE_ENV = 'dev'
```
Crie as tabelas do banco de dados utilizando o comando a seguir que ira executar as migrations.

```npx knex migrate:latest```

Para executar o server-side no modo desenvolvedor utilizando <b>nodemon</b> basta usar o comando a seguir.

```yarn dev```

Para executar o server-side no modo desenvolvedor normalmente basta usar o comando a seguir.

```npm start```
