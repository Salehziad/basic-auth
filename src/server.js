'use strict';
const express=require('express');
const app=express();
app.use(express.json());
const signUp=require('./routes/signUp');
const loginRoutes=require('./routes/login')
app.get('/',(req,res)=>{
    res.send('welcome to signup signin server')
})
app.use(signUp);
app.use(loginRoutes);




function start(PORT){
    app.listen(PORT,()=>{
        console.log(`server is lestining on port ${PORT}`);
    });
}

module.exports={
    app:app,
    start:start
}