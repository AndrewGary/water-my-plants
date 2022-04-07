require('dotenv').config();
const express = require('express');
const path = require('path');

const server = require('./api/server');


server.use(express.static(path.join('C:/Users/andre/OneDrive/Desktop/lambdaAssignments/Unit4/BuildWeek/water-my-plants', 'client/build')))

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})