// Import models from model files
const Category = require('./Category');
const User = require('./User');
const History = require('./History');
const Technique = require('./Technique');

// Define model associations

Category.hasMany(Technique, {
    foreignKey: 'category_id',
});

Technique.belongsTo(Category, {
    foreignKey: 'category_id',
});

Technique.hasMany(History, {
    foreignKey: 'technique_id',
});

History.belongsTo(Technique, {
    foreignKey: 'technique_id'
});

User.hasMany(History, {
    foreignKey: 'user_id',
});

History.belongsTo(User, {
    foreignKey: 'user_id',
});