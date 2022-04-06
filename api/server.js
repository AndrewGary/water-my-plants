const express = require('express');
const { restricted } = require('./auth/auth-middleware');
const path = require('path');

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')))

const UserRouter = require('./users/user-router');
const PlantsRouter = require('./plants/plant-router');
const AuthRouter = require('./auth/auth-router');


server.use('/api/users', UserRouter)
server.use('/api/plants', restricted, PlantsRouter)
server.use('/api/auth', AuthRouter);

// server.get('/', (req, res, next) => {
//     res.status(200).json({ message: 'hello' })
// })
server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    // res.status(200).json({ message: 'help'})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;