const express = require('express');
const Plants = require('./plants-model');


const router = express.Router();


router.get('/', (req, res, next) => {
    console.log(req.decodedToken)
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

router.put('/:id', (req, res, next) => {
    const changes = req.body;

    Plants.update(req.params.id, changes)
    .then(plant => {
        if(plant){
            res.status(200).json(plant);
        }else{
            next({ status: 404, message: 'Plant not found'})
        }
    })
    .catch(error => {
        next(error);
    })
})

router.post('/', (req, res, next) => {
    Plants.add(req.body)
    .then(resp => {
        res.status(200).json(resp)
    })
    .catch(error => {
        next(error);
    })
})

router.delete('/:id', async (req, res, next) => {
    const plant = await Plants.findBy({ plant_id: req.params.id });

    Plants.remove(req.params.id)
    .then(resp => {
        res.status(200).json({ message: `${plant[0].nickname} has been removed`})
    })
})
module.exports = router;