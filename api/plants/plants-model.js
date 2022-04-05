const db = require('../../data/db-config');

const find = () => {
    return db('plants');
}

const findBy = filter => {
    return db('plants')
        .where(filter)
}

const findByUserId = userId => {
    return db('plants')
        .where('user_id', userId)
}




module.exports = {
    findBy,
    find,
    findByUserId
}