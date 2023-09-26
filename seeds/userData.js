// Import the User model
const { User } = require('../models');

// Assign seed data to variable
const userData = [
    {
        name: 'Han Solo',
        email: 'solo@falcon.com',
        password: 'password12345',
    },
    {
        name: 'Luke Skywalker',
        email: 'womprats@beggarscanyon.com',
        password: 'password12345',
    },
    {
        name: 'Leia Organa',
        email: 'nobasehere@alderan.com',
        password: 'password12345',
    },
    {
        name: 'Ben Kenobi',
        email: 'obiwan@dunesea.com',
        password: 'password12345',
    },
];

// Function to seed model
const seedUsers = () => Technique.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

// Export for use by other files
module.exports = seedUsers;