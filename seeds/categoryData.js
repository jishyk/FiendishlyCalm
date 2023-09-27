// Import the Category model
const { Category } = require('../models');

// Assign seed data to variable
const categoryData = [
    {
        id: 1,
        category_name: 'Relieve',
    },
    {
        id: 2,
        category_name: 'Reduce',
    },
    {
        id: 3,
        category_name: 'Achieve',
    },
    {
        id: 4,
        category_name: 'Focus',
    },
    {
        id: 5,
        category_name: 'Heal',
    },
];

// Function to seed model
const seedCategories = () => Category.bulkCreate(categoryData);

// Export for use by other files
module.exports = seedCategories;