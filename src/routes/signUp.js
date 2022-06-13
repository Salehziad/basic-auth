'use strict';
const express = require('express');
const bcrypt = require('bcrypt')
const signUpRoutes = express.Router();
// const hello = require('../middlewar/hello')
const {Users} = require('../models/index')
// signUpRoutes.get('/', hello(Users), (req, res) => {
//     res.send('hello');
// });
signUpRoutes.post('/signup', signup);
// assyncrinus function to wait hashing and ceraye data
async function signup(req, res) {
    // store the table data from body
    let {
        username,
        password
    } = req.body;
    // console.log(username, password);
    try {
        let hashedPassword = await bcrypt.hash(password, 10)
        // console.log({
        //     hashedPassword
        // });
        // console.log({
        //     Users
        // });
        const newUser = await Users.create({
            username: username,
            password: hashedPassword
        });
        // console.log({
        //     newUser
        // });
        const client=await Users.findAll();
        console.log({client});
        res.status(201).json(newUser);
    } catch {
        res.send('error')
    }
}
// const Users=require('../models/index');

module.exports = signUpRoutes;