const express = require('express');
const Plants = require('./plants-model');


const router = express.Router();


router.get('/', (req, res, next) => {
    Plants.find()
    .then(plants => {
        res.status(200).json(plants);
    })
    .catch(error => {
        next(error);
    })
})

router.get('/users/:user_id', (req, res, next) => {
    Plants.findByUserId(req.params.user_id)
    .then(plants => {
        res.status(200).json(plants);
    })
    .catch(error => {
        next(error);
    })
})

module.exports = router;