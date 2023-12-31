// Import the Technique model
const { Technique } = require('../models');

// Assign seed data to variable
const techniqueData = [
    {
        id: 0,
        technique_name: 'Breathing',
        description: 'Focus on your breath and observe it as it goes in and out',
        category_id: 0,
    },
    {
        id: 1,
        technique_name: 'Mindfulness',
        description: 'Be present in the here and now, without judgement',
        category_id: 3,
    },
    {
        id: 2,
        technique_name: 'Focus',
        description: 'Concentrate on a single point of focus, like a candle flame, a pencil, a flower, or other specific object',
        category_id: 3,
    },
    {
        id: 3,
        technique_name: 'Movement',
        description: 'Combine meditation with gentle movement, such as walking, wading, or yoga',
        category_id: 4,
    },
    {
        id: 4,
        technique_name: 'Mantra',
        description: 'Repeat a word, a phrase, or a single sound to help focus the mind',
        category_id: 1,
    },
    {
        id: 5,
        technique_name: 'Contemplate',
        description: 'Reflect on a religious text or proverb',
        category_id: 1,
    },
    {
        id: 6,
        technique_name: 'Compassion',
        description: 'Cultivate compassion and positive emotions towards yourself and others',
        category_id: 4,
    },
    {
        id: 7,
        technique_name: 'Prayer',
        description: 'Engage in prayerful contemplation',
        category_id: 2,
    },
    {
        id: 8,
        technique_name: 'Box Breathing',
        description: 'Inhale, hold, exhale, hold again in a repetitive cycle',
        category_id: 0,
    },
    {
        id: 9,
        technique_name: 'Transcendence',
        description: 'Achieve a state of full relaxation paired with acute awareness',
        category_id: 2,
    },
    {
        id: 10,
        technique_name: 'Listen',
        description: 'Be aware of the sounds of your environment, noticing each one in turn and in detail',
        category_id: 3,
    },
    {
        id: 11,
        technique_name: 'Body Scan',
        description: 'Relax your body in sequence, starting with your toes and gradually working your way up',
        category_id: 4,
    },
    {
        id: 12,
        technique_name: 'Envision',
        description: 'Envision a moment of elation, how you are going to feel after accomplishing your next goal in life',
        category_id: 2,
    },
    {
        id: 13,
        technique_name: 'Sit Quietly',
        description: 'Sit in a dimly lit space, close you eyes, elongate your back, open your airways, and quieten your mind',
        category_id: 1,
    },
    {
        id: 14,
        technique_name: 'Mindful Walking',
        description: 'Take a walk outside, observe your surroundings, pick out details, ponder them, mute everything else',
        category_id: 0,
    },
];

// Function to seed model
const seedTechniques = () => Technique.bulkCreate(techniqueData);

// Export for use by other files
module.exports = seedTechniques;