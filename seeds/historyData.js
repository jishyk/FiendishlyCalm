// Import the History model
const { History } = require('../models');

// Assign seed data to variable
const historyData = [
    {
        comment: 'This was awesome!',
        technique_id: 2,
    },
    {
        comment: 'Cool!',
        technique_id: 1,
    },
    {
        comment: 'The best!',
        technique_id: 5,
    },
    {
        comment: 'Better than others!',
        technique_id: 7,
    },
    {
        comment: 'Made my day!',
        technique_id: 10,
    },
    {
        comment: 'Great for studying!',
        technique_id: 3,
    },
    {
        comment: 'Just what I needed after a long day!',
        technique_id: 4,
    },
    {
        comment: 'I feel much better!',
        technique_id: 12,
    },
    {
        comment: 'This is my go-to!',
        technique_id: 13,
    },
    {
        comment: 'Try this one again!',
        technique_id: 14,
    },
    {
        comment: 'Great for a busy day!',
        technique_id: 9,
    },
    
];

// Function to seed model
const seedHistory = () => History.bulkCreate(historyData);

// Export for use by other files
module.exports = seedHistory;