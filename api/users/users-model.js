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
        .first();
}

const add = async (user) => {
    const [user_id] = await db('users').insert(user);

    return findById(user_id)
}

const updateUser = (id, changes) => {
    return db('users')
        .where('user_id', id)
        .update(changes, '*');
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    updateUser
}