// Import the Technique model
const { Technique } = require('../models');

// Assign seed data to variable
const techniqueData = [
    {
        id: 1,
        technique_name: 'Breathing',
        description: 'Focus on your breath and observe it as it goes in and out',
        category_id: 1,
    },
    {
        id: 2,
        technique_name: 'Mindfulness',
        description: 'Be present in the here and now, without judgement',
        category_id: 4,
    },
    {
        id: 3,
        technique_name: 'Focus',
        description: 'Concentrate on a single point of focus, like a candle flame, a pencil, a flower, or other specific object',
        category_id: 4,
    },
    {
        id: 4,
        technique_name: 'Movement',
        description: 'Combine meditation with gentle movement, such as walking, wading, or yoga',
        category_id: 5,
    },
    {
        id: 5,
        technique_name: 'Mantra',
        description: 'Repeat a word, a phrase, or a single sound to help focus the mind',
        category_id: 2,
    },
    {
        id: 6,
        technique_name: 'Contemplate',
        description: 'Reflect on a religious text or proverb',
        category_id: 2,
    },
    {
        id: 7,
        technique_name: 'Compassion',
        description: 'Cultivate compassion and positive emotions towards yourself and others',
        category_id: 5,
    },
    {
        id: 8,
        technique_name: 'Prayer',
        description: 'Engage in prayerful contemplation',
        category_id: 3,
    },
    {
        id: 9,
        technique_name: 'Box Breathing',
        description: 'Inhale, hold, exhale, hold again in a repetitive cycle',
        category_id: 1,
    },
    {
        id: 10,
        technique_name: 'Transcendence',
        description: 'Achieve a state of full relaxation paired with acute awareness',
        category_id: 3,
    },
];

// Function to seed model
const seedTechniques = () => Technique.bulkCreate(techniqueData);

// Export for use by other files
module.exports = seedTechniques;