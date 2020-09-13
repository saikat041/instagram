const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User')

const JWT_SECRET = process.env.JWT_SECRET

router.get('/info', async function(req, res, next){
    try{
        const token = req.cookies.token || ''
        let userId;
        try{
            userId = jwt.verify(token, JWT_SECRET).userId;
        }catch(err){
            return res.status(403).send('Unauthorized request')
        }
        const user =  await User.findById(userId)
        res.send({email:user.email, name: user.name });
    }catch(err){
        next(err)
    }

});


module.exports = router