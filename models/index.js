// Import models from model files
const Category = require('./Category');
const User = require('./User');
const History = require('./History');
const Technique = require('./Technique');

Category.belongsToMany(Technique, {
    through: 'CategoryTechniques',
});

Technique.belongsToMany(Category, {
    through: 'CategoryTechniques',
});

// ***TODO*** add more associations