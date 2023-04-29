# Arquitetura de backend em NodeJS

Este projeto é um exemplo de arquitetura feito em nodeJS visando um desenvolvimento mais agil e com foco no negócio em que esse novo sistema está inserido.

# Estrutura
Como framework base está sendo utilizado o [Express](https://expressjs.com/)


Para o ORM foi utilizado o [Sequelize](https://sequelize.org/)
<br />
O ORM não utiliza nenhuma biblioca de banco como padrão sendo necessário instalar o drive para que possa ser utilizado. Segue abaixo uma lista <br/>


```
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database
```

Para instalar as bibliotecas utilizadas execute o comando abaixo
```
$ npm install
```

Para fins de desenvolvimento é utilizado o [nodemon](https://nodemon.io/) para ter refresh quando houver alteração de código.
Abaixo o comando para executar a aplicação com nodemon:
```
$ nodemon ./index.js localhost 3000
```