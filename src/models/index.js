'use strict';
require('dotenv').config();
// make connection with database 
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3
// to succesful connect when using heroku
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};
// require models to use them in sequalize
const users = require('./users.model');
// requiring sequalize  to start working with it
const {
    Sequelize,
    DataTypes
} = require("sequelize");
const sequalize = new Sequelize(POSTGRES_URI, sequelizeOptions);
// make modelTable to use them again to exports
const usersTable = users(sequalize, DataTypes);
// export database and modules to use them in routes

module.exports = {
    dataBase: sequalize, // this to make connection server with database 
    Users:usersTable 
}