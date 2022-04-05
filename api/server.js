const express = require('express');

const server = express();
server.use(express.json());

const UserRouter = require('./users/user-router');
const PlantsRouter = require('./plants/plant-router');


server.use('/api/users', UserRouter)
server.use('/api/plants', PlantsRouter)



server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;