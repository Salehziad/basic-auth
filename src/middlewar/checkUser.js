'use strict';
let base64=require('base-64');
const bcrypt=require('bcrypt');

module.exports=(Users)=>async (req,res,next)=>{
    console.log({Users});
    if(req.headers.authorization){
        let header=req.headers.authorization.split(' ');
        console.log({header});
        // use .pop() to take last element in header array
        let encoded=header.pop();
        console.log({encoded});
        let decode= base64.decode(encoded);
        // console.log({decode});
        let [username,password]=decode.split(':');
        console.log(username,password);
        console.log({Users});

        // console.log(x);

        try{
            const user = await Users.findOne({ where: { username: username } });
            console.log(user.password);
            const valid=await bcrypt.compare(password,user.password);
            console.log({valid});
            if (valid==true) {
                req.user=user
            } else {
                res.status(500).send("wrong username or password");
            }
        }catch{next(`error`)}
    }
    next();
}
