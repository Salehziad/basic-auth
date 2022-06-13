'use strict';
const express = require('express');
const bcrypt = require('bcrypt')
const loginRoutes = express.Router();
const {
    Users
} = require('../models/index')

const checkUser = require('../middlewar/checkUser');


loginRoutes.post('/signin', checkUser(Users), signin);

async function signin(req, res) {
    // const client= await Users.findAll();
    // console.log({client});
    res.status(200).json(req.user);
}
loginRoutes.get('/user',checkUser(Users),xxx);
async function xxx(req,res){
    let records=await Users.findAll();
    console.log({records});
    res.send(records);
}


// async function get() {
//     const x = await Users.findAll();
//     console.log({
//         x
//     });
//     return x;
// }
// get();
module.exports = loginRoutes;