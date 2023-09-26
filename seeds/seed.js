// Import the 'sequelize' object for connecting to the database
const sequelize = require('../config/connection');
// Import seed functions
const seedCategories = require('./categoryData');
const seedUsers = require('./userData');
const seedTechniques = require('./techniqueData');

// Define function to seed all models in the database
const seedAll = async () => {
  await sequelize.sync( { force: true });

  await seedCategories();

  await seedUsers();

  await seedTechniques();

  process.exit(0);
};

// Execute function
seedAll();