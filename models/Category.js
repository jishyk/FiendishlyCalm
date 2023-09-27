// Import the Model and DataTypes objects from the sequelize module
const { Model, DataTypes } = require('sequelize');
// Import the 'sequelize' object for creating a model and connecting to the database.
const sequelize = require('../config/connection');

class Category extends Model {};

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        // Do not pluralize table name
        freezeTableName: true,
        // Keep table name in snake case
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;

