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

const validateBodyValuesForRegister = (req, res, next) => {

    if(!req.body.username || !req.body.password || !req.body.phoneNumber){
        res.status(400).json({ message: 'You must include a username, password, and phone number.' });
    }else{
        next();
    }
}

const validateUsernameAndPhone = async (req, res, next) => {

    let { username, password, phoneNumber } = req.body;

    username = username.trim();
    password = password.trim();
    phoneNumber = phoneNumber.trim();

    if(username.length < 2 || username.length > 15){
        next({status: 401, message: 'username must be 2-15 characters long.'})
    }

    if(/^[A-Za-z0-9]*$/.test(username) === false){
        next({ status: 401, message: 'username can only contain letters and numbers' })
    }

    if(phoneNumber.length !== 10){
        next({ status: 401, message: 'phone number must be a 10 digit number'})
    }

    if(password.length < 8 || password.length > 50){
        next({ status: 401, message: 'password must be 8-50 characters long'})
    }

    try{
        let test = await Users.findBy({ username: username })

        if(test.length){
            next({ status: 400, message: 'Username already exists'})
        }

        test = await Users.findBy({ phoneNumber: phoneNumber })
        if(test.length){
            next({ status: 400, message: 'Phone number already being used'})
        }
        next();
    }catch(error){
        console.log(`the error is ${error}`)
        next({ status: 400, message: 'Does this work??'});
    }
}

const validateLoginBody = (req, res, next) => {
    if(!req.body.password || !req.body.username){
        next({ status: 401, message: 'Username and Password required.'})
    }else{
        next();
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
    validateBodyValuesForRegister,
    validateLoginBody
}