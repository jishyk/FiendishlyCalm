// Import the History model
const { History } = require('../models');

// Assign seed data to variable
const historyData = [
    {
        comment: 'This was awesome!',
        technique_id: 2,
        user_id: 1,
    },
    {
        comment: 'Cool!',
        technique_id: 1,
        user_id: 1,
    },
    {
        comment: 'The best!',
        technique_id: 5,
        user_id: 1,
    },
    {
        comment: 'Better than others!',
        technique_id: 7,
        user_id: 3,
    },
    {
        comment: 'Made my day!',
        technique_id: 10,
        user_id: 3,
    },
    {
        comment: 'Great for studying!',
        technique_id: 3,
        user_id: 2,
    },
    {
        comment: 'Just what I needed after a long day!',
        technique_id: 4,
        user_id: 2,
    },
    {
        comment: 'I feel much better!',
        technique_id: 12,
        user_id: 2,
    },
    {
        comment: 'This is my go-to!',
        technique_id: 13,
        user_id: 4,
    },
    {
        comment: 'Try this one again!',
        technique_id: 14,
        user_id: 4,
    },
    {
        comment: 'Great for a busy day!',
        technique_id: 9,
        user_id: 3,
    },
    
];

// Function to seed model
const seedHistory = () => History.bulkCreate(historyData);

// Export for use by other files
module.exports = seedHistory;