/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    {username: 'Andrew', password: 'password', phoneNumber: '5555555555' },
    {username: 'Brad', password: 'password', phoneNumber: '6666666666' },
    {username: 'Chris', password: 'password', phoneNumber: '7777777777' },
    {username: 'Katie', password: 'password', phoneNumber: '8888888888' },
    {username: 'Jordan', password: 'password', phoneNumber: '9999999999' },
    {username: 'Tyler', password: 'password', phoneNumber: '0000000000' },
    {username: 'Brandon', password: 'password', phoneNumber: '1111111111' }
  ])
  await knex('plants').insert([
    {nickname: 'plant1', species: 'GreenPlant', h2oFrequency: 60 * 24, user_id: 1},
    {nickname: 'plant2', species: 'GreenPlant', h2oFrequency: 60 * 24, user_id: 1},
    {nickname: 'plant3', species: 'GreenPlant', h2oFrequency: 60 * 24, user_id: 3},
    {nickname: 'plant4', species: 'GreenPlant', h2oFrequency: 60 * 24, user_id: 4},
    {nickname: 'plant5', species: 'GreenPlant', h2oFrequency: 60 * 24, user_id: 5}
  ])
};
