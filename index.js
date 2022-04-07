require('dotenv').config();
const express = require('express');
const path = require('path');

const server = require('./api/server');

server.use(express.static(path.join(__dirname, 'client/build')))

const PORT = process.env.PORT || 9000;

server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})