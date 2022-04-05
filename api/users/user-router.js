const express = require('express');
const Users = require('./users-model');
const { restricted } = require('../auth/auth-middleware');

const router = express.Router();

router.put('/:id', restricted, (req, res, next) => {
    if(req.params.id == req.decodedToken.subject){
        const changes = req.body;

        Users.updateUser(req.params.id, changes)
        .then(user => {
            if(user){
                res.status(200).json({ message: 'Password updated'});
            }else{
                next({ stauts: 404, message: 'User not found'})
            }
        })
    }else{
        next({ status: 401, message: 'You can only change your password'})
    }
})

router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'connected'})
})

module.exports = router;