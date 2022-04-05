/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return(
      knex.schema.createTable('users', users => {
          users.increments('user_id');
          users.string('username', 255).notNullable().unique();
          users.string('password', 255).notNullable();
          users.string('phoneNumber', 15).notNullable().unique();
      })

      .createTable('plants', plants => {
          plants.increments('plant_id');
          plants.string('nickname', 255).notNullable().unique();
          plants.string('species', 255).notNullable();
          plants.integer('h2oFrequency').notNullable();
          plants.integer('user_id').notNullable();
          plants.string('img', 1000);
      })
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
