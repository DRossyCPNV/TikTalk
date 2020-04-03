//Imports
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const {Sequelize} = require('sequelize');
const cors = require('cors');

//Instantiate server ----------------------------------------------------------------------------------------
let server = express();

//Body Parser configuration ---------------------------------------------------------------------------------
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

//Data base connection --------------------------------------------------------------------------------------
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
   host: 'localhost',
   dialect: 'mysql',
   port: '3306'
 });

sequelize.authenticate().then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//CORS ------------------------------------------------------------------------------------------------------
//server.use(cors());
server.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});

//Routes ----------------------------------------------------------------------------------------------------
const usersRoutes = require('./routers/users.routes');
const conversationsRoutes = require('./routers/conversations.routes');

//server.use('/', usersRoutes);
server.use('/', conversationsRoutes);

//Launch server ---------------------------------------------------------------------------------------------
server.listen(8081, function(){
   console.log('Server is listening');
});