// Import the Model and DataTypes objects from the sequelize module
const { Model, DataTypes } = require('sequelize');
// Import the 'sequelize' object for creating a model and connecting to the database.
const sequelize = require('../config/connection');

class Technique extends Model {};

Technique.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        technique_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        // Do not pluralize table name
        freezeTableName: true,
        // Keep table name in snake case
        underscored: true,
        modelName: 'technique',
    },
);

module.exports = Technique;
