const router = require('express').Router();
const Users = require('../users/users-model');
const { checkUsernameExists,
        validateUsernameAndPhone } = require('./auth-middleware');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'the secret is in the sauce';
const bcrypt = require('bcryptjs');

//middleware needed for this endpoint
//verifyBody - checks the body for the needed input values
//
router.post('/register', validateUsernameAndPhone,  (req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    
    // Users.add(req.body)
    // .then(resp => {
    //     Users.findBy({ username: req.body.username })
    //     .then(resp => {
    //         const returnUser = {
    //             user_id: resp[0].user_id,
    //             username: resp[0].username,
    //             phoneNumber: resp[0].phoneNumber
    //         }
    //         res.status(201).json(returnUser);
    //     })
    // })
    Users.add(req.body)
    .then(resp => {
        res.status(200).json(resp);
    })
    .catch(error => {
        next(error);
    })
})

router.post('/login', checkUsernameExists, (req, res, next) => {
    if( bcrypt.compareSync(req.body.password, req.user.password)){
        const token = buildToken(req.user);
        res.json({
            message: `Welcome back, ${req.user.username}`,
            token
        })
    }else{
        next({ status: 401, message: 'Invalid credentials'})
    }
})

const buildToken = user => {
    const payload = {
        subject: user.user_id,
        username: user.username,
        phoneNumber: user.phoneNumber
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;