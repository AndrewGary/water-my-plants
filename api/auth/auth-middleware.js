const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets')

const checkUsernameExists = async (req, res, next) => {
    try{
        const test = await Users.findBy({ username: req.body.username });

        if(test.length){
            req.user = test[0];
            next();
        }else{
            next({ status: 401, message: 'Invalid credentials'})
        }
    }catch(error){
        next(error);
    }
}

const validateUsernameAndPhone = async (req, res, next) => {
    try{
        let test = await Users.findBy({ username: req.body.username })

        if(test.length){
            next({ status: 400, message: 'Username already exists'})
        }

        test = await Users.findBy({ phoneNumber: req.body.phoneNumber })
        if(test.length){
            next({ status: 400, message: 'Phone number already being used'})
        }
        next();
    }catch(error){
        next(error);
    }
}

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        next({ status: 401, message: 'Token required' })
    }else{
        jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
            if(error){
                next({ status: 401, message: 'Invalid token'})
            }else{
                req.decodedToken = decodedToken;
                next();
            }
        })
    }
}

module.exports = {
    checkUsernameExists,
    validateUsernameAndPhone,
    restricted,

}