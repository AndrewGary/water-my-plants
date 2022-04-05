const db = require('../../data/db-config');

const find = () => {
    return db('users')
        .join('plants')
        .where('users', 'users.user_id', 'plants.user_id')

}

const findBy = filter => {
    return db('users')
        .where(filter);
}

const findById = id => {
    return db('users')
        .where('user_id', id)
}

const add = async user => {
    const { username, password, phoneNumber } = user;
    await db.transaction(async trx => {
        const [user_id] = await trx('users').insert({ username, password, phoneNumber });
    })
    return findById(user_id);
}

module.exports = {
    find,
    findBy,
    findById,
    add
}