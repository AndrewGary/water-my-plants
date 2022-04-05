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
    // await db.transaction(async trx => {
    //     const [user_id] = await trx('users').insert({ username, password, phoneNumber });
    //     // const user_id = 2
    //     // const result = await trx('users').insert({ username, password, phoneNumber });
    // })
    // const [user_id] = await db('users').insert({ username: username, password: password, phoneNumber: phoneNumber})
    
    // return findById(user_id);

    const [user_id] = await db('users').insert(user);

    return findById(user_id)
}

module.exports = {
    find,
    findBy,
    findById,
    add
}