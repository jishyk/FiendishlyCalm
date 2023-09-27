// Import the Sequelize class from the sequelize module
const Sequelize = require('sequelize');
// Import the config function from the dotenv module for environment variable security
require('dotenv').config();

let sequelize;

// Create an instance of the Sequelize class for connecting to the appropriate database, remote (JAWSDB_URL) or local
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
