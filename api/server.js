const express = require('express');
const { restricted } = require('./auth/auth-middleware');

const server = express();
server.use(express.json());

const UserRouter = require('./users/user-router');
const PlantsRouter = require('./plants/plant-router');
const AuthRouter = require('./auth/auth-router');


server.use('/api/users', UserRouter)
server.use('/api/plants', restricted, PlantsRouter)
server.use('/api/auth', AuthRouter);



server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;