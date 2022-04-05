const router = require('express').Router();
const Users = require('../users/users-model');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//middleware needed for this endpoint
//verifyBody - checks the body for the needed input values
//
router.post('/register', (req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    
    Users.add(req.body)
    .then(resp => {
        Users.findBy({ username: req.body.username })
        .then(resp => {
            const returnUser = {
                user_id: resp[0].user_id,
                username: resp[0].username,
                phoneNumber: resp[0].phoneNumber
            }
            res.status(201).json(returnUser);
        })
    })
})

router.post('/login', (req, res, next) => {
    if( bcrypt.compareSync(req.body.password, req.user.password)){

    }else{
        next({ status: 401, message: 'Invalid credentials'})
    }
})

function buildToken(user){
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