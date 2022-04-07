const Plants = require('./plants-model');

//come back to this in future.
const validateChanges = (req, res, next) => {
    next();
}

module.exports = {
    validateChanges
}