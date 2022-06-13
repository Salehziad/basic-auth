'use strict';
module.exports=(userTable)=>(req,res,next)=>{
    console.log('hello');
    // console.log(userTable)
    next();
}