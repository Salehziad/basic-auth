'use strict';
require('dotenv').config();
const PORT=process.env.PORT;
const server=require('./src/server')
const {dataBase}=require('./src/models/index');
dataBase.sync().then(()=>{
    server.start(PORT)
});
