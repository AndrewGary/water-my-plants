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

const add = async plant => {
    const [plant_id] = await db('plants').insert(plant)

    return findBy({ plant_id: plant_id})
}

const update = (id, changes) => {
    return db('plants')
        .where('plant_id', id)
        .update(changes, '*');
}

const remove = id => {
    return db('plants')
        .where('plant_id', id)
        .del();
}




module.exports = {
    findBy,
    find,
    findByUserId,
    add,
    update,
    remove,
}